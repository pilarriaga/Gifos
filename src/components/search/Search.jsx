//styles
import './Search.css';
//components
import Button from "../button/Button";
//assets
import friends from '../../assets/ilustra_header.svg';
import searchIcon from '../../assets/icon-search-mod-noc.svg';
import searchIconV from '../../assets/icon-search.svg'
//dependencies
import React, { useState, useEffect } from 'react'
//utils
import { request } from '../../utils/request';

function Search({
	onClick,
	value,
	setValue,
	btnDisabled,
	setIsSearching,
	isSearching
}) {
	const [autoComplete, setAutoComplete] = useState([]);

	//function that autocomplets the shearching word 
	useEffect(() => {
		if (value !== "") {
			request("/search/tags", value, 5)
				.then(res => res.json())
				.then(data => setAutoComplete(data.data))
				.catch(err => console.log(err))
		}
	}, [value])

	return (
		<main className='main-section'>
			<h1>Inspírate y busca los mejores <strong>GIFS</strong>!</h1>
			<img src={friends} alt="friends logo" className='friends-logo' />
			<form className='s-line'>
				<input
					className='search'
					list='browsers'
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder='Buscar Gif'
				/>
				<Button
					onClick={onClick}
					className="search-btn"
					disabled={btnDisabled}
				>
					<img src={searchIcon} alt="searching logo" className='s-icon' />
				</Button>
				<div //dinamic css to show or not the sugested 5 words
					className={`data ${value === "" || autoComplete.length === 0 ?
					'no-show' :
					'show'}`}
				>
					{(autoComplete || []).map(item => {
						return (
							<div
								key={item.name}
								className='list'
								onClick={() => { //update the inputvalue and search the selected word
									setValue(item.name)
									setIsSearching(!isSearching)
								}}
							>
								<img src={searchIconV} alt="lupa de busqueda" className='s-icon' />
								<div value={item.name}>{item.name}</div>
							</div>
						)
					})}
				</div>
			</form>
		</main>
	);
}

export default Search;