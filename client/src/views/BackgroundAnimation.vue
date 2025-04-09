<template>
    <!-- Канвас, к которому будем обращаться через ref -->
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  export default {
    name: 'BackgroundAnimation',
  
    setup() {
      const bgCanvas = ref(null);       // Ссылка на canvas-элемент
      let animationId = null;           // ID анимации (requestAnimationFrame), чтобы останавливать при размонтировании
  
      const POINT_COUNT = 100;           // Количество точек
      const MAX_DIST = 250;             // Макс. дистанция для соединения линией
      const POINT_SIZE = 4;             // Радиус нарисованных точек
      const points = [];                // Массив для хранения всех точек
  
      // Подстраиваем размеры canvas под текущее окно
      function resizeCanvas() {
        if (!bgCanvas.value) return;
        bgCanvas.value.width = window.innerWidth;
        bgCanvas.value.height = window.innerHeight;
      }
  
      // Простейшая функция расстояния между двумя точками
      function dist(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      }
  
      // Основной цикл анимации
      function animate() {
        if (!bgCanvas.value) return;
        const ctx = bgCanvas.value.getContext('2d');
  
        // Очищаем canvas
        ctx.clearRect(0, 0, bgCanvas.value.width, bgCanvas.value.height);
  
        // Перебираем все точки
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
  
          // Двигаем точку
          p.x += p.vx;
          p.y += p.vy;
  
          // Отражаем от границ экрана
          if (p.x < 0 || p.x > bgCanvas.value.width) p.vx *= -1;
          if (p.y < 0 || p.y > bgCanvas.value.height) p.vy *= -1;
  
          // Рисуем саму точку
          ctx.beginPath();
          ctx.arc(p.x, p.y, POINT_SIZE, 0, 2 * Math.PI);
          ctx.fillStyle = '#000000'; // Цвет точек
          ctx.fill();
  
          // Соединяем линиями с ближайшими точками
          for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            const d = dist(p.x, p.y, p2.x, p2.y);
  
            if (d < MAX_DIST) {
              const alpha = 1 - d / MAX_DIST; // Чем дальше, тем более прозрачная линия
              ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
  
        // Запрашиваем следующий кадр анимации
        animationId = requestAnimationFrame(animate);
      }
  
      onMounted(() => {
        // При монтировании компонента
        resizeCanvas();                    // Установить размеры canvas
        window.addEventListener('resize', resizeCanvas);
  
        // Создаем все частицы (точки)
        for (let i = 0; i < POINT_COUNT; i++) {
          points.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
          });
        }
  
        // Стартуем анимацию
        animate();
      });
  
      onBeforeUnmount(() => {
        // При размонтировании компонента останавливаем анимацию и удаляем обработчик
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationId);
      });
  
      // Возвращаем рефы/данные для шаблона
      return {
        bgCanvas,
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-canvas {
    position: fixed;
    top: 0;
    left: 0;
    /* Дадим размер на всё окно */
    width: 100vw;
    height: 100vh;
    /* Чтобы блок занял доступное пространство, несмотря на атрибуты width/height canvas */
    display: block;
    /* Ставим слой позади */
    z-index: -1;
    /* Если хотите, можно задать цвет фона под анимацией */
    background: #ffffff;
  }
  </style>
  