<template>
    <v-layout justify-end>
        <v-list flat color="transparent">
            <v-list-item-group >
                <v-list-item
                v-for="(icon, i) in icons"
                :key="`${i}-${icon.id}`"
                >
                    <v-list-item-icon>
                            <v-btn
                            :href="icon.href"
                            fab
                            class="subheading mx-3"
                            target="_blank"
                            small
                        >
                            <v-icon>mdi-{{ icon.title }}</v-icon>
                        </v-btn>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-layout>
</template>

<script>
export default {
    name:"socialLink",
    data: () => ({
    icons: [
        {
            title: 'github-circle',
            href: 'https://github.com/hazalozturk',
        },
        {
            title: 'linkedin',
            href: 'https://www.linkedin.com/in/hazalcanisagozturk/',
        },
        {
            title: 'twitter-circle',
            href: 'https://twitter.com/HazalOz92600198',
        },
        {
            title: 'dribbble',
            href: 'https://dribbble.com/hazalozturk',
        },
        {
            title: 'codepen',
            href: 'https://codepen.io/hozturk',
        },
        {
            title: 'instagram',
            href: 'https://www.instagram.com/artbyhazal/?hl=en',
        },
        {
            title: 'camera',
            href: 'https://www.gurushots.com/hcanisag/photos',
        }]
    }),
};
</script>