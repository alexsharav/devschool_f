<template>
    <div>
        <h1>Курс: Python</h1>
        <ul>
            <li v-for="lesson in lessons" :key="lesson.path">
                <router-link class="lesson-routers" :to="lesson.path">{{ lesson.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Программирование на языке Python',
    data() {
        return {
            lessons: [],
        };
    },
    created() {
        const context = require.context('./chapters/', true, /.vue$/);


        const parsedLessons = context.keys().map((key) => {
            const match = key.match(/^\.\/([0-9]+)\/([0-9.]+)\.vue$/);
            if (!match) return null;

            const [_, chapter, lesson] = match;

            return {
                path: `/courses/Python/${chapter}/${lesson}`,
                title: `Глава ${chapter}, Урок ${lesson}`,
            };
        }).filter(Boolean);

        this.lessons = parsedLessons;
    },
};
</script>
<style scoped>
.lesson-routers {
    font-size: 24px;
    color: black;
}
</style>
