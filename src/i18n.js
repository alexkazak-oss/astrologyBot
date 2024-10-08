import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
	en: {
		translation: {
			aries: 'Aries',
			taurus: 'Taurus',
			gemini: 'Gemini',
			cancer: 'Cancer',
			leo: 'Leo',
			virgo: 'Virgo',
			libra: 'Libra',
			scorpio: 'Scorpio',
			sagittarius: 'Sagittarius',
			capricorn: 'Capricorn',
			aquarius: 'Aquarius',
			pisces: 'Pisces',
			dates_aries: 'March 21 - April 19',
			dates_taurus: 'April 20 - May 20',
			dates_gemini: 'May 21 - June 20',
			dates_cancer: 'June 21 - July 22',
			dates_leo: 'July 23 - August 22',
			dates_virgo: 'August 23 - September 22',
			dates_libra: 'September 23 - October 22',
			dates_scorpio: 'October 23 - November 21',
			dates_sagittarius: 'November 22 - December 21',
			dates_capricorn: 'December 22 - January 19',
			dates_aquarius: 'January 20 - February 18',
			dates_pisces: 'February 19 - March 20',
			back: 'Back',
		},
	},
	ru: {
		translation: {
			aries: 'Овен',
			taurus: 'Телец',
			gemini: 'Близнецы',
			cancer: 'Рак',
			leo: 'Лев',
			virgo: 'Дева',
			libra: 'Весы',
			scorpio: 'Скорпион',
			sagittarius: 'Стрелец',
			capricorn: 'Козерог',
			aquarius: 'Водолей',
			pisces: 'Рыбы',
			dates_aries: '21 марта - 19 апреля',
			dates_taurus: '20 апреля - 20 мая',
			dates_gemini: '21 мая - 20 июня',
			dates_cancer: '21 июня - 22 июля',
			dates_leo: '23 июля - 22 августа',
			dates_virgo: '23 августа - 22 сентября',
			dates_libra: '23 сентября - 22 октября',
			dates_scorpio: '23 октября - 21 ноября',
			dates_sagittarius: '22 ноября - 21 декабря',
			dates_capricorn: '22 декабря - 19 января',
			dates_aquarius: '20 января - 18 февраля',
			dates_pisces: '19 февраля - 20 марта',
			back: 'Назад',
		},
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
