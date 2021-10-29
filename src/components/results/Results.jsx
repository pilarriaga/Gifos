//styles
import './Results.css'
//components
import Gif from "../gif/Gif";

function Results({
	data,
	answer
}) {
	return (
		<>
			{!data.length ?
				<p>No se encuentran resultados :(</p> :
				<div>
					{!answer ?
						<p>Realiza tu búsqueda</p> :
						<div>
							<p>Resultados de la búsqueda</p>
								<section className='gif-container'>
									{(data || []).map(item => {
										const {
											id,
											images: {
												fixed_height: {
													url
												}
											} } = item;
										return <Gif key={id}	src={url} />
									})}
								</section>
						</div>
					}
				</div>
			}
		</>
	)
}
export default Results