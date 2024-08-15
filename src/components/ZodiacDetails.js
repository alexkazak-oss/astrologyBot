import React from 'react'
import {useTranslation} from 'react-i18next'

const ZodiacDetails = ({sign, description, onBack}) => {
	const {t} = useTranslation()

	return (
		<div className='zodiac-details'>
			<h2>{t(sign)}</h2>
			<p>{description}</p>
			<button onClick={onBack}>{t('back')}</button>
		</div>
	)
}

export default ZodiacDetails
