import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import './App.css'
import ZodiacCard from './components/ZodiacCard'
import ZodiacDetails from './components/ZodiacDetails'
import './i18n'

const signs = [
	{sign: 'aries', dates: 'dates_aries'},
	{sign: 'taurus', dates: 'dates_taurus'},
	{sign: 'gemini', dates: 'dates_gemini'},
	{sign: 'cancer', dates: 'dates_cancer'},
	{sign: 'leo', dates: 'dates_leo'},
	{sign: 'virgo', dates: 'dates_virgo'},
	{sign: 'libra', dates: 'dates_libra'},
	{sign: 'scorpio', dates: 'dates_scorpio'},
	{sign: 'sagittarius', dates: 'dates_sagittarius'},
	{sign: 'capricorn', dates: 'dates_capricorn'},
	{sign: 'aquarius', dates: 'dates_aquarius'},
	{sign: 'pisces', dates: 'dates_pisces'},
]

function App() {
	const {t, i18n} = useTranslation()
	const [selectedSign, setSelectedSign] = useState(null)
	const [description, setDescription] = useState('')

	useEffect(() => {
		const userLang =
			window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code || 'en'
		i18n.changeLanguage(userLang === 'ru' ? 'ru' : 'en')
	}, [i18n])

	const fetchDescription = async (sign) => {
		try {
			// Данные для отправки на сервер
			const data = {}

			const response = await axios.post(
				'https://vedicrishi-horoscope-match-making-v1.p.rapidapi.com/match_ashtakoot_points/',
				data,
				{
					headers: {
						'x-rapidapi-key':
							'5168d1cc18mshf782414b2bb577bp1fb050jsnfc6572d04e69',
						'x-rapidapi-host':
							'vedicrishi-horoscope-match-making-v1.p.rapidapi.com',
						'Content-Type': 'application/json',
					},
				},
			)

			setDescription(response.data.description)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
		}
	}

	const handleSignClick = (sign) => {
		setSelectedSign(sign)
		fetchDescription(sign)
	}

	const handleBack = () => {
		setSelectedSign(null)
	}

	return (
		<div className='app'>
			<button
				onClick={() =>
					i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
				}>
				{i18n.language === 'ru' ? 'English' : 'Русский'}
			</button>
			{selectedSign ? (
				<ZodiacDetails
					sign={selectedSign}
					description={description}
					onBack={handleBack}
				/>
			) : (
				<div className='zodiac-list'>
					{signs.map((zodiac) => (
						<ZodiacCard
							key={zodiac.sign}
							sign={zodiac.sign}
							dates={zodiac.dates}
							onClick={() => handleSignClick(zodiac.sign)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default App
