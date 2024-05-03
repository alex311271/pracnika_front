export const transformRole = (dbRole) => ({
	roleId: dbRole.id,
	roleName: dbRole.name,
});
