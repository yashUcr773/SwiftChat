export default function DemoUserCreds() {
	return (
		<div className="flex flex-col gap-1 items-center justify-center text-sm mt-2 px-2">
			<div>Want to just demo the app? Use Creds.</div>
			<div className="flex flex-col items-start w-60">
				<div>User 1</div>
				<div>Email: demouser@mailsac.com</div>
				<div>Password: demo_user_1</div>
			</div>
			<div className="flex flex-col items-start w-60">
				<div>User 2</div>
				<div>Email: demouser2@mailsac.com</div>
				<div>Password: demo_user_2</div>
			</div>
		</div>
	);
}
