import React from "react";

function SearchMovies() {
	const [movies, setMovies] = React.useState([
		{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	]);
	const [keyword, setKeyword] = React.useState('garfield');


	// Credenciales de API
	const apiKey = '7581f363'; // Intenta poner cualquier cosa antes para probar

	const handleSearch = React.useCallback((event) => {
		event.preventDefault();
		fetch(`http://127.0.0.1:3000/api/products`)
			.then(res => res.json())
			.then(data => {
				if (data.Search) {
					setMovies(data.Search);
				}
				if (data.Error) {
					setMovies([]);
				}
			})
			.catch(err => { console.log(err); });
	}, [keyword]);

	React.useEffect(() => {
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				setMovies(data.Search);
			})
			.catch(err => { console.log(err); });
	}, []);

	return (
		<div className="container-fluid">
			{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form onSubmit={handleSearch}>
									<div className="form-group">
										<label htmlFor="">Buscar por título:</label>
										<input type="text" className="form-control" onChange={(event) => setKeyword(event.target.value)} />
									</div>
									<button className="btn btn-info">Search</button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Películas para la palabra: {keyword}</h2>
							</div>
							{/* Listado de películas */}
							{
								movies.length > 0 && movies.map((movie, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={movie.Poster}
															alt={movie.Title}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{movie.Year}</p>
												</div>
											</div>
										</div>
									);
								})
							}
						</div>
						{movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	);
}

export default SearchMovies;
