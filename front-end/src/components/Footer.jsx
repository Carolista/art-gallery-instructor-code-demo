const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div>&copy;{currentYear} Caroline R. Jones</div>
		</footer>
	);
};

export default Footer;
