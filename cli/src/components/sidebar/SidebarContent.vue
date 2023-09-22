<script setup>
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/PerfectScrollbar.vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem.vue'

const isCurrentRoute = (routeName) => {
    return useRouter().currentRoute.value.name == routeName
}

const isCurrentPath = (path) => {
    return useRouter().currentRoute.value.path.startsWith(path)
}

</script>


<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
            icon="mdi:view-dashboard"
        />

        <SidebarCollapsible
            icon="mdi:note-outline"
            title="Pages"
            :active="isCurrentPath('/pages')"
        >
            <SidebarCollapsibleItem
                :to="{ name: 'User' }"
                title="User"
                :active="isCurrentRoute('User')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Book' }"
                title="Book"
                :active="isCurrentRoute('Book')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Category' }"
                title="Category"
                :active="isCurrentRoute('Category')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Customer' }"
                title="Customer"
                :active="isCurrentRoute('Customer')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Orders' }"
                title=" Orders"
                :active="isCurrentRoute('Orders')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Review' }"
                title=" Review"
                :active="isCurrentRoute('Review')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Orders_detail' }"
                title=" Orders_detail"
                :active="isCurrentRoute('Orders_detail')"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'Author' }"
                title=" Author"
                :active="isCurrentRoute('Author')"
            />
        </SidebarCollapsible>

        <SidebarCollapsible icon="mdi:shield-star-outline" title="Authentication">
            <SidebarCollapsibleItem :to="{ name: 'Login' }" title="Login" />
            <SidebarCollapsibleItem
                :to="{ name: 'Register' }"
                title="Register"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'VerifyEmail' }"
                title="Verify Email"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ForgotPassword' }"
                title="Forgot Password"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ResetPassword' }"
                title="Reset Password"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ConfirmPassword' }"
                title="Confirm Password"
            />
        </SidebarCollapsible>
    </PerfrectScrollbar>
</template>
