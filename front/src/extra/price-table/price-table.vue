<template>
    <div>
        <v-data-table dark
                      :headers="headers"
                      :items="desserts"
                      :search="search"
                      hide-actions
                      :pagination.sync="pagination"
                      class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-centr">{{ props.item.calories }}</td>
            </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
            <v-pagination dark v-model="pagination.page" :length="pages(pagination)"></v-pagination>
        </div>
    </div>
</template>

<script src="./price-table.ts"></script>