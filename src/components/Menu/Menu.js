import styles from './Menu.module.scss';
import global from '../../pages/App.module.scss';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../Header/Header';

const Menu = ({ isOpen, onClose }) => {
	const [authors, setAuthors] = useState([]);
	const [categories, setCategories] = useState([]);
	const [years, setYears] = useState([]);

	useEffect(() => {
		const getOptions = async () => {
			const resA = await fetch(`${process.env.API_URL}/authors`)
			const authors = await resA.json();
			const auts = authors.map(({ name, slug }) => ({ name, slug }));
			setAuthors(auts);

			const resB = await fetch(`${process.env.API_URL}/categories/routes`)
			const categories = await resB.json();
			const cats = categories.map(({ name, slug }) => ({ name, slug }));
			setCategories(cats);

			const resC = await fetch(`${process.env.API_URL}/posts/timeline`)
			const dates = await resC.json();

			const years = Object.keys(dates.reduce((all, current) => ({
				...all,
				[current._id.year]: null,
			}), {}));

			setYears(years);
		}

		getOptions();
	}, []);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={styles.menu}>
			<div className={`${global.wrapper} ${styles.wrapper}`}>
				<Header isInverted onClose={onClose} className={styles.header} />
				<div className={styles.bio}>
					<p>Started in April 2010 by a group of young, good looking, modest kids.</p>
					<p>Organised events at Bussey Building, Brainchild Festival, SXSW, and Glastonbury in 2012 – 2016.</p>
					<p>Won Site of the Year at 2012 ROTD awards.</p>
					<p>Quietened down around 2017 – 2019.</p>
				</div>
				<div className={styles.years}>{years.map(year => <li><a href={`/archive/${year}`}>{year}</a></li>)}</div>
				<div className={styles.categoriesBox}>
					<div className={styles.categories}>{categories.map(cat => <li><a href={`/${cat.slug}`}>{cat.name}</a></li>)}</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;