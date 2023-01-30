import React, { useEffect } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotaPrawna = () => {



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
            <h1>Nota prawna</h1>
            <div style={{ marginTop: "50px" }}>
                <Link href="/">
                    <button type="button" className="button-back-to-mail-page">
                        Powrót do strony głównej
                    </button>
                </Link>
            </div>
            <div>
                <h3>Obowiązek informacyjny RODO</h3>
                <p>
                    Poniższa informacja stanowi zwięzły, zrozumiały i przejrzysty skrót informacji zamieszczonych w <Link href="/polityka-prywatnosci"> Polityce Prywatności </Link> odnośnie Administratora danych, celu i sposobu przetwarzania danych osobowych oraz Twoich praw w związku z tym przetwarzaniem, w formie wymaganej do spełnienia obowiązku informacyjnego RODO. Szczegóły dotyczące sposobu przetwarzania i podmiotów uczestniczących w tym procesie dostępne są we wskazanej polityce.
                </p>
            </div>
            <div>
                <h3>Kto jest administratorem danych?</h3>
                <p>Administratorem Danych Osobowych (dalej Administrator) jest osoba fizyczna "Marcel Nowakowski" zamieszkała w Choszczno, świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu</p>
            </div>
            <div>
                <h3>
                    Jak można skontaktować się z administratorem danych?
                </h3>
                <p>Z Administratorem można skontaktować się w jeden z poniższych sposobów</p>
                <ul>
                    <li>Adres poczty elektronicznej - nowakowskimarcel01@gmail.com</li>
                    <li>Połączenie telefoniczne - 515555372</li>
                </ul>
            </div>
            <div>
                <h3>Czy Administrator powołał Inspektora Danych Osobowych?</h3>
                <p>Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora Ochrony Danych.</p>
                <p>W sprawach dotyczących przetwarzania danych, w tym danych osobowych, należy kontaktować się bezpośrednio z Administratorem.</p>
            </div>
            <div>
                <h3>Skąd pozyskujemy dane osobowe i jakie są ich źródła?</h3>
                <p>Dane pozyskiwane są z następujących źródeł:</p>
                <ul>
                    <li>od osób, których dane dotyczą</li>
                    <li>w przypadku rejestracji przy użyciu portali społecznościowych, za wyrażoną świadomą zgodą tych osób, z tych portali społecznościowych</li>
                </ul>
            </div>
            <div>
                <h3>Jaki jest zakres przetwarzanych przez nas danych osobowych?</h3>
                <p>W serwisie przetwarzane są dane osobowe zwykłe, podane dobrowolnie przez osoby, których dotyczą
                    (Np. imię i nazwisko, login, adres e-mail, telefon, adres IP, itp.)</p>
                <p>Szczegółowy zakres przetwarzanych danych dostępny jest w <Link href="/polityka-prywatnosci">Polityce Prywatności</Link></p>
            </div>
            <div>
                <h3>
                    Jakie są cele przetwarzania przez nas danych?
                </h3>
                <ul>
                    <li>Realizacji usług elektronicznych:
                        <ul>
                            <li>Usługi rejestracji i utrzymania konta Użytkownika w Serwisie i funkcjonalności z nim związanych</li>
                            <li>Usługi Newslettera (w tym przesyłania za zgodą treści reklamowych)</li>
                        </ul>
                    </li>
                    <li>Komunikacji Administratora z Użytkownikami w sprawach związanych z Serwisem oraz ochrony danych</li>
                    <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
                </ul>
            </div>


            <div>
                <h3>Jakie są podstawy prawne przetwarzania danych?</h3>
                <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
                <ul>
                    <li>Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                        <ul>
                            <li>art. 6 ust. 1 lit. a <p>osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów</p></li>
                            <li>art. 6 ust. 1 lit. b <p>przetwarzanie jest niezbędne do wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy</p></li>
                            <li>art. 6 ust. 1 lit. f <p>przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora lub przez stronę trzecią</p></li>
                        </ul>
                    </li>
                    <li>Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000)</li>
                    <li>Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800)</li>
                    <li>Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. 1994 Nr 24 poz. 83)</li>
                </ul>
            </div>
            <div>
                <h3>Jaki jest prawnie uzasadniony interes realizowany przez Administratora?</h3>
                <ul>
                    <li>W celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit. f) RODO) polegający na ochronie naszych praw, w tym między innymi;</li>
                    <li>W celu oceny ryzyka potencjalnych klientów</li>
                    <li>W celu oceny planowanych kampanii marketingowych</li>
                    <li>W celu realizacji marketingu bezpośredniego</li>
                </ul>
            </div>

            <div>
                <h3>Przez jaki okres przetwarzamy dane osobowe?</h3>
                <p>
                    Co do zasady, wskazane dane osobowe są przechowywane wyłącznie przez okres świadczenia usługi w ramach prowadzonego serwisu przez Administratora. Są one usuwane lub anonimizowane w okresie do 30 dni od chwili zakończenia świadczenia usług (np. usunięcie zarejestrowanego konta użytkownika, wypisanie z listy Newsletter, itp.)
                </p>
                <p>
                    W wyjątkowych sytuacjach, w celu zabezpieczenie prawnie uzasadnionego interesu realizowanego przez Administratora, okres ten może ulec wydłużeniu. W takiej sytuacji Administrator będzie przechowywał wskazane dane, od czasu żądania ich usunięcia przez Użytkownika, nie dłużej niż przez okres 3 lat w przypadku naruszenia lub podejrzenia naruszenia zapisów regulaminu serwisu przez osobę, której dane dotyczą.
                </p>
            </div>
            <div>
                <h3>
                    Kto jest odbiorcą danych w tym danych osobowych?
                </h3>
                <p>Co do zasady jedynym odbiorcą danych jest Administrator.</p>
                <p>Przetwarzanie danych może jednak być powierzone innym podmiotom, realizującym usługi na rzecz Administratora w celu utrzymania działalności Serwisu.
                    Do podmiotów takich można zaliczyć między innymi:</p>

                <ul>
                    <li>Firmy, za pośrednictwem których świadczona jest usługa Newslettera</li>
                    <li>Firmy pośredniczące w płatnościach on-line za towaru lub usługi oferowane w ramach Serwisu (w przypadku dokonywania transakcji zakupu w Serwisie)</li>
                </ul>
            </div>
            <div>
                <h3>Czy Państwa dane osobowe będą przekazywane poza Unię Europejską?</h3>
                <p>Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że zostały opublikowane na skutek indywidualnego działania Użytkownika (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą dostępne dla każdej osoby odwiedzającej serwis.</p>
            </div>

            <div>
                <h3>Czy dane osobowe będą podstawą zautomatyzowanego podejmowania decyzji?</h3>
                <p>Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji (profilowania).</p>
            </div>
            <div>
                <h3>Jakie mają Państwo prawa związane z przetwarzaniem danych osobowych?</h3>
                <ul>
                    <li>Prawo dostępu do danych osobowych
                        Użytkownikom przysługuje prawo uzyskania dostępu do swoich danych osobowych, realizowane na żądanie złożone do Administratora</li>
                    <li>Prawo do sprostowania danych osobowych
                        Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego sprostowania danych osobowych, które są nieprawidłowe lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane na żądanie złożone do Administratora</li>
                    <li>
                        Prawo do usunięcia danych osobowych
                        Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego usunięcia danych osobowych, realizowane na żądanie złożone do Administratora.
                    </li>
                </ul>

                <p>W przypadku kont użytkowników, usunięcie danych polega na anonimizacji danych umożliwiających identyfikację Użytkownika.</p>

                <p>W przypadku usługi Newsletter, Użytkownik ma możliwość samodzielnego usunięcia swoich danych osobowych korzystając z odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.</p>
                <ul>
                    <li>Prawo do ograniczenia przetwarzania danych osobowych
                        Użytkownikom przysługuje prawo ograniczenia przetwarzania danych osobowych w przypadkach wskazanych w art. 18 RODO, m.in. kwestionowania prawidłowość danych osobowych, realizowane na żądanie złożone do Administratora</li>
                    <li>Prawo do przenoszenia danych osobowych
                        Użytkownikom przysługuje prawo uzyskania od Administratora, danych osobowych dotyczących Użytkownika w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, realizowane na żądanie złożone do Administratora</li>
                    <li>Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych
                        Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec przetwarzania jego danych osobowych w przypadkach określonych w art. 21 RODO, realizowane na żądanie złożone do Administratora</li>
                    <li>Prawo wniesienia skargi
                        Użytkownikom przysługuje prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.</li>
                </ul>

            </div>


        </motion.div>
    )
}

export default NotaPrawna