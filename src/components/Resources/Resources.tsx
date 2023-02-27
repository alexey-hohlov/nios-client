import styles from './Resources.module.scss';

const Resources: React.FC = () => {
    return (
        <section className={styles.resources}>
            <div className={styles.header}>
                <span>Информационные ресурсы</span>
            </div>
            <ul>
                <li>
                    НАВИГАТОР ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ ДЕТЕЙ НОВОСИБИРСКОЙ
                    ОБЛАСТИ
                </li>
                <hr />
                <li>ОБЩЕСТВЕННЫЙ СОВЕТ</li>
                <hr />
                <li>МИНИСТЕРСТВО ПРОСВЕЩЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ</li>
                <hr />
                <li>ПРАВИТЕЛЬСТВО НОВОСИБИРСКОЙ ОБЛАСТИ</li>
                <hr />
                <li>ПЕРСОНАЛЬНЫЕ ДАННЫЕ</li>
                <hr />
                <li>РЕГИОНАЛЬНАЯ СИСТЕМА ДИСТАНЦИОННОГО ОБУЧЕНИЯ</li>
            </ul>
        </section>
    );
};

export default Resources;
