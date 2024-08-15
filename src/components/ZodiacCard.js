import React from 'react'
import {useTranslation} from 'react-i18next'

const ZodiacCard = ({sign, dates, onClick}) => {
	const {t} = useTranslation()

	return (
		<div className='zodiac-card' onClick={onClick}>
			<h2>{t(sign)}</h2>
			<p>{t(dates)}</p>
		</div>
	)
}

export default ZodiacCard
