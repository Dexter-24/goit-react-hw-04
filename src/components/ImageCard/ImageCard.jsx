import css from './ImageCard.module.css'

export default function ImageCard({ image, onClick }) {
    return (
        <div className={css.card} >
            <img src={image.urls.small} alt={image.alt_description} className={css.img} onClick={() => onClick(image)}/>
    </div>
    )
}