<template>
        <v-list flat color="transparent" max-width="150px">
            <v-list-item-group >
                <v-list-item
                    v-for="(sub, i) in menu"
                    :key="i"
                >
                    <v-list-item-icon>
                        <v-btn
                            dark
                            color="#FFB997"
                            font="white"
                            class="subheading mx-3"
                            target="_blank"
                            elevation="20"
                        >
                            {{ sub.title }}
                        </v-btn>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
</template>

<script>
export default {
    name:"sidebarMenu",
    data: () => ({
        menu: [
        {
            title: 'Home',
            href: '#',
        },
        {
            title: 'About',
            href: '#',
        },
        {
            title: 'Skills',
            href: '#',
        },
        {
            title: 'Works',
            href: '#',
        }
        ]
  }),
};
</script>