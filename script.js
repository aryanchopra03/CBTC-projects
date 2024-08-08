const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3a656363c1msh4c3f913247ab049p1c5f0fjsne3fc0c3b477b',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch('https://open-weather13.p.rapidapi.com/city/landon/EN', options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}