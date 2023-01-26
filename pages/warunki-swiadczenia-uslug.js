import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'


const WarunkiSwiadczeniaUslug = () => {

    useEffect(() => {
        return () => {
            var r = document.querySelector('.button-switch-book');
            r.style.setProperty('opacity', '0');
            setShowCart(false)
        }
    }, [])

    return (
        <motion.div className='policy-template'
            initial={{
                opacity: 0,
                y: 200,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.5
                }
            }}
            exit={{
                y: -200,
                opacity: 0,
            }}
        >
            <h1>Warunki świadczenia usług</h1>
            <Link href="/">
                <button type="button" className="button-back-to-mail-page">
                    Powrót do strony głównej
                </button>
            </Link>
            <h3>Regulamin serwisu</h3>
            <div>
                <h3>I. Pojęcia ogólne</h3>
                <ul>
                    <li>Regulamin – niniejszy regulamin</li>
                    <li>Serwis – serwis internetowych "Przeczytaj to za 10 lat", działających pod adresem https://www.przeczytajtoza10lat.com/</li>
                    <li>Usługodawca – właściciel serwisu będący osobą fizyczną - Marcel Nowakowski</li>
                    <li>Usługobiorca – każda osoba fizyczna, uzyskująca dostęp do Serwisu i korzystająca z usług świadczonych za pośrednictwem Serwisu przez Usługodawcę.</li>
                    <li>Komunikacja Drogą Elektroniczną – Komunikacja pomiędzy stronami za pośrednictwem poczty elektronicznej (e-mail) oraz formularzy kontaktowych dostępnych na stronie www.</li>
                </ul>

            </div>
            <div>
                <h3>II. Postanowienia ogólne</h3>
                <ul>
                    <li>Regulamin, określa zasady funkcjonowania i użytkowania Serwisu oraz określa zakres praw i obowiązków Usługobiorców i Usługodawcy związanych z użytkowaniem Serwisu.</li>
                    <li>Przedmiotem usług Usługodawcy jest udostępnienie nieodpłatnych narzędzi w postaci Serwisu, umożliwiających Usługobiorcom dostęp do treści w postaci wpisów, artykułów i materiałów audiowizualnych lub aplikacji internetowych i formularzy elektronicznych</li>
                    <li>Wszelkie ewentualne treści, artykuły i informacje zawierające cechy wskazówek lub porad publikowane na łamach Serwisu są jedynie ogólnym zbiorem informacji i nie są kierowane do poszczególnych Usługobiorców. Usługodawca nie ponosi odpowiedzialności za wykorzystanie ich przez Usługobiorców.</li>
                    <li>Usługobiorca bierze na siebie pełną odpowiedzialno za sposób wykorzystania materiałów udostępnianych w ramach Serwisu w tym za wykorzystanie ich zgodnie z obowiązującymi przepisami prawa.</li>
                    <li>Usługodawca nie udziela żadnej gwarancji co do przydatności materiałów umieszczonych w Serwisie.</li>
                    <li>Usługodawca nie ponosi odpowiedzialności z tytułu ewentualnych szkód poniesionych przez Usługobiorców Serwisu lub osoby trzecie w związku z korzystaniem z Serwisu. Wszelkie ryzyko związane z korzystaniem z Serwisu, a w szczególności z używaniem i wykorzystywaniem informacji umieszczonych w Serwisie, ponosi Usługobiorca korzystający z usług Serwisu.</li>

                </ul>
            </div>
            <div>
                <h3>III. Warunki używania Serwisu</h3>
                <ul>
                    <li>Używanie Serwisu przez każdego z Usługobiorców jest nieodpłatne i dobrowolne.</li>
                    <li>Usługobiorcy mają obowiązek zapoznania się z Regulaminem oraz pozostałymi dokumentami stanowiącymi jego integralną część i muszą zaakceptować w całości jego postanowienia w celu dalszego korzystania z Serwisu.</li>
                    <li>Usługobiorcy nie mogą wykorzystywać żadnych pozyskanych w Serwisie danych osobowych do celów marketingowych.</li>
                    <li>Wymagania techniczne korzystania z Serwisu:
                        <ul>
                            <li>urządzenie z wyświetlaczem umożliwiające wyświetlanie stron internetowych,</li>
                            <li>połączenie z internetem,</li>
                            <li>dowolna przeglądarka internetowa, która wyświetla strony internetowe zgodnie ze standardami i postanowieniami Konsorcjum W3C i obsługuje strony www udostępniane w języku HTML5,</li>
                            <li>włączoną obsługę skryptów JavaScript,</li>
                            <li>włączoną obsługę plików Cookie</li>
                        </ul>
                    </li>

                    <li>W celu zapewnienia bezpieczeństwa Usługodawcy, Usługobiorcy oraz innych Usługobiorców korzystających z Serwisu, wszyscy Usługobiorcy korzystający z Serwisu powinni stosować się do ogólnie przyjętych <Link href="https://nety.pl/cyberbezpieczenstwo/zasady-ogolne-korzystania-z-sieci-internet/">zasad bezpieczeństwa w sieci.</Link></li>
                    <li>Zabrania się działań wykonywanych osobiście przez Usługobiorców lub przy użyciu oprorgamowania:
                        <ul>
                            <li>bez zgody pisemnej, dekompilacji i analizy kodu źródłowego,</li>
                            <li>bez zgody pisemnej, powodujących nadmierne obciążenie serwera Serwisu,</li>
                            <li>bez zgody pisemnej, prób wykrycia luk w zabezpieczeniach Serwisu i konfiguracji serwera,</li>
                            <li>podejmowania prób wgrywania lub wszczykiwania na serwer i do bazy danych kodu, skryptów i oprogramowania mogących wyrządzić szkodę oprogramowaniu Serwisu, innym Usługobiorcom lub Usługodawcy,</li>
                            <li>podejmowania prób wgrywania lub wszczykiwania na serwer i do bazy danych kodu, skryptów i oprogramowania mogących śledzić lub wykradać dane Usługobiorców lub Usługodawcy,</li>
                            <li>podejmowania jakichkolwiek działań mających na celu uszkodzenie, zablokowanie działania Serwisu lub uniemożliwienie realizacji celu w jakim działa Serwis.</li>
                        </ul>
                    </li>
                    <li>W przypadku wykrycia zaistnienia lub potencjalnej możliwości zaistnienia incydentu Cyberbezpieczeństwa lub naruszenia RODO, Usługobiorcy w pierwszej kolejności powinni zgłosić ten fakt Usługodawcy w celu szybkiego usunięcia problemu / zagrożenia i zabezpieczenia interesów wszystkich Usługobiorców Serwisu.</li>
                </ul>
            </div>

            <div>
                <h3>IV. Warunki świadczenia usługi Newsletter</h3>
                <p>Brak Newslettera</p>
            </div>
            <div>
                <h3>
                    V. Gromadzenie danych o Usługobiorcach
                </h3>
                <p>W celu prawidłowego świadczenia usług przez Serwis, zabezpieczenia prawnego interesu Usługodawcy oraz w celu zapewnienia zgodności działania Serwisu z obowiązującym prawem, Usługodawca za pośrednictwem Serwisu gromadzi i przetwarza niektóre dane o Użytkownikach.</p>
                <p>W celu prawidłowego świadczenia usług, Serwis wykorzystuje i zapisuje niektóre anonimowe informacje o Usługobiorcy w plikach cookies.</p>
                <p>Zakres, cele, sposób oraz zasady przetwarzania danych dostępne są w załącznikach do Regulaminu:
                    <Link href="/warunki-swiadczenia-uslug">„Obowiązek informacyjny RODO”</Link> oraz <Link href="/polityka-prywatnosci">w „Polityce prywatności„</Link>
                    , stanowiących integralną część Regulaminu.</p>
            </div>
            <div>
                <h3>VI. Prawa autorskie</h3>
                <ul>
                    <li>Właścicielem Serwisu oraz praw autorskich do serwisu jest Usługodawca.</li>
                    <li>Część danych zamieszczonych w Serwisie są chronione prawami autorskimi należącymi do firm, instytucji i osób trzecich, niepowiązanych w jakikolwiek sposób z Usługodawcą, i są wykorzystywane na podstawie uzyskanych licencji, lub opartych na licencji darmowej.</li>
                    <li>Na podstawie Ustawy z dnia 4 lutego 1994 o prawie autorskim zabrania się wykorzystywania, kopiowania, reprodukowania w jakiejkolwiek formie oraz przetrzymywania w systemach wyszukiwania z wyłączeniem wyszukiwarki Google, Bing, Yahoo, NetSprint, DuckDuckGo, Facebook oraz LinkedIn jakichkolwiek artykułów, opisów, zdjęć oraz wszelkich innych treści, materiałów graficznych, wideo lub audio znajdujących się w Serwisie bez pisemnej zgody lub zgody przekazanej za pomocą Komunikacji Drogą Elektroniczną ich prawnego właściciela.</li>
                    <li>Zgodnie z Ustawą z dnia 4 lutego 1994 o prawie autorskim ochronie nie podlegają proste informacje prasowe, rozumiane jako same informacje, bez komentarza i oceny ich autora. Autor rozumie to jako możliwość wykorzystywania informacji z zamieszczonych w serwisie tekstów, ale już nie kopiowania całości lub części artykułów o ile nie zostało to oznaczone w poszczególnym materiale udostępnionym w Serwisie.</li>
                </ul>
            </div>
            <div>
                <h3>
                    VII. Zmiany Regulaminu
                </h3>
                <ul>
                    <li>Wszelkie postanowienia Regulaminu mogą być w każdej chwili jednostronnie zmieniane przez Usługodawcę, bez podawania przyczyn.</li>
                    <li>Zmiany Regulaminu wchodzą w życie natychmiast po ich publikacji.</li>
                    <li>Traktuje się iż każdy Usługobiorca, kontynuujący korzystanie z Serwisu po zmianie Regulaminu akceptuje go w całości.</li>
                </ul>

            </div>
            <div>
                <h3>VIII. Postanowienia końcowe</h3>
                <ul>
                    <li>Usługodawca dokona wszelkich starań by usługi Serwisu były oferowane w sposób ciągły. Nie ponosi on jednak żadnej odpowiedzialności za zakłócenia spowodowane siłą wyższą lub niedozwoloną ingerencją Usługobiorców, osób trzecich czy działalnością zewnętrznych automatycznych programów.</li>
                    <li>Usługodawca zastrzega sobie prawo do zmiany jakichkolwiek informacji umieszczonych w Serwisie w wybranym przez Usługodawcę terminie, bez konieczności uprzedniego powiadomienia Usługobiorców korzystających z usług Serwisu.</li>
                    <li>Usługodawca zastrzega sobie prawo do czasowego, całkowitego lub częściowego wyłączenia Serwisu w celu jego ulepszenia, dodawania usług lub przeprowadzania konserwacji, bez wcześniejszego uprzedzania o tym Usługobiorców.</li>
                    <li>Usługodawca zastrzega sobie prawo do wyłączenia Serwisu na stałe, bez wcześniejszego uprzedzania o tym Usługobiorców.</li>
                    <li>Usługodawca zastrzega sobie prawo do dokonania cesji w części lub w całości wszelkich swoich praw i obowiązków związanych z Serwisem, bez zgody i możliwości wyrażania jakichkolwiek sprzeciwów przez Usługobiorców.</li>
                    <li>Obowiązujące oraz poprzednie Regulaminy Serwisu znajduję się na tej podstronie pod aktualnym Regulaminem.</li>
                    <li>We wszelkich sprawach związanych z działalnością Serwisu należy kontaktować się z Usługodawcę korzystając z jednej z poniższych form kontaktu:
                        <ul>
                            <li>Używając formularza kontaktowego dostępnego w Serwisie</li>
                            <li>Wysyłając wiadomość na adres e-mail: nowakowskimarcel01@gmail.com</li>
                            <li>Poprzez połączenie telefoniczne z numerem: 515555372</li>
                        </ul>
                    </li>
                </ul>
                <p>Kontakt przy użyciu wskazanych środków komunikacji wyłącznie w sprawach związanych z prowadzonym Serwisem.</p>
            </div>


        </motion.div>
    )
}

export default WarunkiSwiadczeniaUslug