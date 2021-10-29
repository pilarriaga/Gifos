//styles
import './Results.css'
//components
import Gif from "../gif/Gif";

function Results({
	data,
}) {
	return (
		<>
			<section className='gif-container'>
				{(data || []).map(item => {
					const {
						id,
						images: {
							fixed_height: {
								url
							}
						} } = item;
					return <Gif key={id} src={url} />
				})}
			</section>
		</>
	)
}
export default Results