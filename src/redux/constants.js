const PUBLIC_Routes = [
    {
        slug: 'dashboard',
        title: 'Dashboard',
    }
]

export const Tenant_Permissions = [
    ...PUBLIC_Routes,
    {
        slug: 'notifications',
        title: 'Notifications',
    }
]

export const Landlord_Permissions = [
    ...PUBLIC_Routes,
    {
        slug: 'tenants',
        title: 'Tenants'
    },
    {
        slug: 'property',
        title: 'Properties'
    }
]