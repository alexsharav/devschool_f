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

    function resizeCanvas() {
      if (!bgCanvas.value) return;
      bgCanvas.value.width = window.innerWidth;
      bgCanvas.value.height = window.innerHeight;
    }

    function dist(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function animate() {
      if (!bgCanvas.value) return;
      const ctx = bgCanvas.value.getContext('2d');

      ctx.clearRect(0, 0, bgCanvas.value.width, bgCanvas.value.height);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > bgCanvas.value.width) p.vx *= -1;
        if (p.y < 0 || p.y > bgCanvas.value.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, POINT_SIZE, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const d = dist(p.x, p.y, p2.x, p2.y);

          if (d < MAX_DIST) {
            const alpha = 1 - d / MAX_DIST;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    onMounted(() => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      for (let i = 0; i < POINT_COUNT; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
        });
      }

      animate();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    });

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
  width: 100vw;
  height: 100vh;
  display: block;
  z-index: -1;
  background: #000000;
}
</style>