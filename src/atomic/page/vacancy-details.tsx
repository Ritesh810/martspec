import React from 'react';
import NavigationBar from "@/atomic/organism/navbar";
import BulletList from '../molecule/bullet-list';

const expectations = [
    { title: 'Написание текстов', items: ['Для сайта', 'Для мобильных приложений'] },
    { title: 'Ассоциативное мышление', items: ['Для сайта', 'Для мобильных приложений'] },
    { title: 'Инициативность', items: ['Для сайта', 'Для мобильных приложений'] },
    { title: 'Личные качества', items: ['Для сайта', 'Для мобильных приложений'] },
    { title: 'Работа с AI', items: ['Для сайта', 'Для мобильных приложений'] },
    { title: 'Ответственность', items: ['Для сайта', 'Для мобильных приложений'] }
];

const internshipConditions = [
    "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
    "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
    "— Работа из дома на своем устройстве",
    "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
  ];

  const featuresOfWork = [
    "— Дружелюбная и вдохновляющая атмосфера стартапа",
    "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
    "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
  ]

const VacancyDetails: React.FC = () => {
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new vacancy-details">
                <section>
                    <div className="row">
                        <div className="col col-lg-8">
                            <h1>Copywriter📝</h1>
                            <p className="p" style={{fontWeight: 'bold'}}>Не оплачивается</p>
                            <p style={{color: '#212529'}}>Стажировка, удаленная работа</p>
                        </div>
                        <p style={{color: '#212529', marginBottom: '0'}}>
                            Мы ищем стажера-копирайтера, который будет создавать увлекательный и продающий контент для нашего сайта 
                            и мобильных приложений. Вы будете придумывать названия меню, кнопок и других компонентов, и возможно писать 
                            тексты для блогов и социальных сетей.
                        </p>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <h2>Ожидания от кандидата</h2>
                        <div className="row row-no-padding col-12 grid">
                            {expectations.map((expectation, index) => (
                                <div className="col-lg-6" key={index} style={{marginBottom: '2.25rem'}}>
                                    <h3 style={{marginBottom: '1.375rem'}}>{expectation.title}</h3>
                                    <BulletList
                                        items={expectation.items}
                                        iconColor="#FFB340"
                                        className="col-bullet-list"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className='row'>
                        <h2>Условия стажировки</h2>
                        <ul>
                            {internshipConditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <div className='row'>
                        <h2>Особенности</h2>
                        <h3>Почему стоит выбрать нас:</h3>
                        <ul>
                            {featuresOfWork.map((feature, index) => (
                            <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <div className='row'>
                        <h2>Отклик на стажировку</h2>
                        <p>
                            1. Заполните Google форму и отправьте ее нам<br/>
                            2. Мы все внимательно изучим и обязательно вернемся к вам с обратной связью в кратчайшие сроки
                        </p>
                        <div>
                            <button className='mt-2 ms-btn-large'>Откликнуться</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default VacancyDetails;
