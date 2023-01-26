import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'

const PolitykaPrywatnosci = () => {

    useEffect(() => {
        return () => {
            var r = document.querySelector('.button-switch-book');
            r.style.setProperty('opacity', '0');
            setShowCart(false)
        }
    }, [])

    return (
        <>
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
                <h1>Polityka prywatności</h1>
                <Link href="/">
                    <button type="button" className="button-back-to-mail-page">
                        Powrót do strony głównej
                    </button>
                </Link>
                <div>
                    Poniższa Polityka Prywatności określa zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach Użytkowników korzystających z
                    Serwisu do celów świadczenia usług drogą elektroniczną przez Administratora oraz zasady gromadzenia i przetwarzania
                    danych osobowych Użytkowników, które zostały podane przez nich osobiście i dobrowolnie za pośrednictwem narzędzi
                    dostępnych w Serwisie. <br /> <br />
                    Poniższa Polityka Prywatności jest integralną częścią <Link href="/polityka-prywatnosci">Regulaminu Serwisu</Link>, który określa zasady, prawa i obowiązki
                    Użytkowników korzystających z Serwisu.

                </div>
                <div>
                    <h3>§1 Definicje</h3>
                    <ul>
                        <li>
                            Serwis - serwis internetowy "Przeczytaj to za 10 lat" działający pod adresem https://www.przeczytajtoza10lat.com/
                        </li>
                        <li>
                            Serwis zewnętrzny - serwisy internetowe partnerów, usługodawców lub usługobiorców współpracujących z Administratorem
                        </li>
                        <li>
                            Administrator Serwisu / Danych - Administratorem Serwisu oraz Administratorem Danych (dalej Administrator) jest osoba fizyczna "Marcel Nowakowski" zamieszkała w Choszczno, świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu
                        </li>
                        <li>
                            Użytkownik - osoba fizyczna, dla której Administrator świadczy usługi drogą elektroniczną za pośrednictwem Serwisu.
                        </li>
                        <li>
                            Cookies (ciasteczka) - dane tekstowe gromadzone w formie plików zamieszczanych na Urządzeniu Użytkownika
                        </li>
                        <li>
                            RODO - Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                        </li>
                        <li>
                            Dane osobowe - oznaczają informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej („osobie, której dane dotyczą”); możliwa do zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować, w szczególności na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny, dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość osoby fizycznej
                        </li>
                        <li>
                            Przetwarzanie - oznacza operację lub zestaw operacji wykonywanych na danych osobowych lub zestawach danych osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką jak zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie, rozpowszechnianie lub innego rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie, usuwanie lub niszczenie;
                        </li>
                        <li>
                            Ograniczenie przetwarzania - oznacza oznaczenie przechowywanych danych osobowych w celu ograniczenia ich przyszłego przetwarzania
                        </li>
                        <li>
                            Profilowanie - oznacza dowolną formę zautomatyzowanego przetwarzania danych osobowych, które polega na wykorzystaniu danych osobowych do oceny niektórych czynników osobowych osoby fizycznej, w szczególności do analizy lub prognozy aspektów dotyczących efektów pracy tej osoby fizycznej, jej sytuacji ekonomicznej, zdrowia, osobistych preferencji, zainteresowań, wiarygodności, zachowania, lokalizacji lub przemieszczania się
                        </li>
                        <li>
                            Zgoda - zgoda osoby, której dane dotyczą oznacza dobrowolne, konkretne, świadome i jednoznaczne okazanie woli, którym osoba, której dane dotyczą, w formie oświadczenia lub wyraźnego działania potwierdzającego, przyzwala na przetwarzanie dotyczących jej danych osobowych
                        </li>
                        <li>
                            Naruszenie ochrony danych osobowych - oznacza naruszenie bezpieczeństwa prowadzące do przypadkowego lub niezgodnego z prawem zniszczenia, utracenia, zmodyfikowania, nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych osobowych przesyłanych, przechowywanych lub w inny sposób przetwarzanych
                        </li>
                        <li>
                            Pseudonimizacja - oznacza przetworzenie danych osobowych w taki sposób, by nie można ich było już przypisać konkretnej osobie, której dane dotyczą, bez użycia dodatkowych informacji, pod warunkiem że takie dodatkowe informacje są przechowywane osobno i są objęte środkami technicznymi i organizacyjnymi uniemożliwiającymi ich przypisanie zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej
                        </li>
                        <li>
                            Anonimizacja - Anonimizacja danych to nieodwracalny proces operacji na danych, który niszczy / nadpisuje "dane osobowe" uniemożliwiając identyfikację, lub powiązanie danego rekordu z konkretnym użytkownikiem lub osobą fizyczną.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>§2 Inspektor Ochrony Danych</h3>
                    <p>Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora Ochrony Danych.</p>
                    <p>W sprawach dotyczących przetwarzania danych, w tym danych osobowych, należy kontaktować się bezpośrednio z Administratorem.</p>
                </div>
                <div>
                    <h3>§3 Rodzaje Plików Cookies</h3>
                    <ul>
                        <li>
                            Cookies wewnętrzne - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez system teleinformatyczny Serwisu
                        </li>
                        <li>
                            Cookies zewnętrzne - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez systemy teleinformatyczne Serwisów zewnętrznych. Skrypty Serwisów zewnętrznych, które mogą umieszczać pliki Cookies na Urządzeniach Użytkownika zostały świadomie umieszczone w Serwisie poprzez skrypty i usługi udostępnione i zainstalowane w Serwisie
                        </li>
                        <li>
                            Cookies sesyjne - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis podczas jednej sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z Urządzenia Użytkownika.
                        </li>
                        <li>
                            Cookies trwałe - pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis do momentu ich ręcznego usunięcia. Pliki nie są usuwane automatycznie po zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia Użytkownika jest ustawiona na tryb usuwanie plików Cookie po zakończeniu sesji Urządzenia.
                        </li>

                    </ul>
                </div>
                <div>
                    <h3>§4 Bezpieczeństwo składowania danych</h3>
                    <ul>
                        <li>
                            Mechanizmy składowania i odczytu plików Cookie - Mechanizmy składowania, odczytu i wymiany danych pomiędzy Plikami Cookies zapisywanymi na Urządzeniu Użytkownika a Serwisem są realizowane poprzez wbudowane mechanizmy przeglądarek internetowych i nie pozwalają na pobieranie innych danych z Urządzenia Użytkownika lub danych innych witryn internetowych, które odwiedzał Użytkownik, w tym danych osobowych ani informacji poufnych. Przeniesienie na Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków jest także praktycznie niemożliwe.
                        </li>
                        <li>
                            Cookie wewnętrzne - zastosowane przez Administratora pliki Cookie są bezpieczne dla Urządzeń Użytkowników i nie zawierają skryptów, treści lub informacji mogących zagrażać bezpieczeństwu danych osobowych lub bezpieczeństwu Urządzenia z którego korzysta Użytkownik.
                        </li>
                        <li>
                            Cookie zewnętrzne - Administrator dokonuje wszelkich możliwych działań w celu weryfikacji i doboru partnerów serwisu w kontekście bezpieczeństwa Użytkowników. Administrator do współpracy dobiera znanych, dużych partnerów o globalnym zaufaniu społecznym. Nie posiada on jednak pełnej kontroli nad zawartością plików Cookie pochodzących od zewnętrznych partnerów. Za bezpieczeństwo plików Cookie, ich zawartość oraz zgodne z licencją wykorzystanie przez zainstalowane w serwisie Skrypty, pochodzących z Serwisów zewnętrznych, Administrator nie ponosi odpowiedzialności na tyle na ile pozwala na to prawo. Lista partnerów zamieszczona jest w dalszej części Polityki Prywatności.
                        </li>
                        <li>
                            Kontrola plików Cookie
                            <ul>
                                <li>Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia dotyczące zapisywania, usuwania oraz dostępu do danych zapisanych plików Cookies przez każdą witrynę internetową</li>
                                <li>Informacje o sposobie wyłączenia plików Cookie w najpopularniejszych przeglądarkach komputerowych dostępne są na stronie: jak wyłączyć cookie lub u jednego ze wskazanych dostawców:</li>
                                <ul>

                                    <li><Link href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=pl">Zarządzanie plikami cookies w przeglądarce Chrome</Link></li>
                                    <li><Link href="https://help.opera.com/pl/latest/web-preferences/">Zarządzanie plikami cookies w przeglądarce Opera</Link></li>
                                    <li><Link href="https://support.mozilla.org/pl/kb/blokowanie-ciasteczek">Zarządzanie plikami cookies w przeglądarce FireFox</Link></li>
                                    <li><Link href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Zarządzanie plikami cookies w przeglądarce Edge</Link></li>
                                    <li><Link href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">Zarządzanie plikami cookies w przeglądarce Safari</Link></li>
                                    <li><Link href="https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-11#">Zarządzanie plikami cookies w przeglądarce Internet Explorer 11</Link></li>

                                </ul>
                                <li>Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej pory pliki Cookie korzystając z narzędzi Urządzenia Użytkownika, za pośrednictwem którego Użytkownik korzysta z usług Serwisu.</li>
                            </ul>
                        </li>
                        <li>
                            Zagrożenia po stronie Użytkownika - Administrator stosuje wszelkie możliwe środki techniczne w celu zapewnienia bezpieczeństwa danych umieszczanych w plikach Cookie. Należy jednak zwrócić uwagę, że zapewnienie bezpieczeństwa tych danych zależy od obu stron w tym działalności Użytkownika. Administrator nie bierze odpowiedzialności za przechwycenie tych danych, podszycie się pod sesję Użytkownika lub ich usunięcie, na skutek świadomej lub nieświadomej działalność Użytkownika, wirusów, koni trojańskich i innego oprogramowania szpiegującego, którymi może jest lub było zainfekowane Urządzenie Użytkownika. Użytkownicy w celu zabezpieczenia się przed tymi zagrożeniami powinni stosować się do zasad korzystania z <Link href="https://nety.pl/cyberbezpieczenstwo/" >sieci internet.</Link>
                        </li>
                        <li>
                            Przechowywanie danych osobowych - Administrator zapewnia, że dokonuje wszelkich starań, by przetwarzane dane osobowe wprowadzone dobrowolnie przez Użytkowników były bezpieczne, dostęp do nich był ograniczony i realizowany zgodnie z ich przeznaczeniem i celami przetwarzania. Administrator zapewnia także, że dokonuje wszelkich starań w celu zabezpieczenia posiadanych danych przed ich utratą, poprzez stosowanie odpowiednich zabezpieczeń fizycznych jak i organizacyjnych.
                        </li>

                    </ul>
                </div>
                <div>
                    <h3>
                        §5 Cele do których wykorzystywane są pliki Cookie
                    </h3>
                    <ul>
                        <li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
                        <li>Personalizacja Serwisu dla Użytkowników</li>
                        <li>Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów urządzeń, łącze itp.)</li>
                        <li>Serwowanie usług multimedialnych</li>
                    </ul>
                </div>

                <div>
                    <h3>§6 Cele przetwarzania danych osobowych</h3>
                    <p>Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w jednym z następujących celów:</p>
                    <ul>
                        <li>Realizacji usług elektronicznych:</li>
                        <li>Komunikacji Administratora z Użytkownikami w sprawach związanych z Serwisem oraz ochrony danych</li>
                        <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
                    </ul>
                    <p>
                        Dane o Użytkownikach gromadzone anonimowo i automatycznie są przetwarzane w jednym z następujących celów:
                    </p>

                    <ul>
                        <li>Prowadzenie statystyk</li>
                        <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
                    </ul>
                </div>

                <div>
                    <h3>
                        §7 Pliki Cookies Serwisów zewnętrznych
                    </h3>
                    <p>
                        Administrator w Serwisie wykorzystuje skrypty javascript i komponenty webowe partnerów, którzy mogą umieszczać własne pliki cookies na Urządzeniu Użytkownika. Pamiętaj, że w ustawieniach swojej przeglądarki możesz sam decydować o dozwolonych plikach cookies jakie mogą być używane przez poszczególne witryny internetowe. Poniżej znajduje się lista partnerów lub ich usług zaimplementowanych w Serwisie, mogących umieszczać pliki cookies:
                    </p>
                    <ul>
                        <li>Usługi multimedialne:</li>
                        <li>Prowadzenie statystyk:</li>
                        <li><Link href="https://policies.google.com/privacy?hl=pl">Google Analytics</Link></li>
                    </ul>
                    <p>
                        Usługi świadczone przez podmioty trzecie są poza kontrolą Administratora. Podmioty te mogą w każdej chwili zmienić swoje warunki świadczenia usług, polityki prywatności, cel przetwarzania danych oraz sposów wykorzystywania plików cookie.
                    </p>
                </div>
                <div>
                    <h3>
                        §8 Rodzaje gromadzonych danych
                    </h3>
                    <p>Serwis gromadzi dane o Użytkownikach. Cześć danych jest gromadzona automatycznie i anonimowo, a część danych to dane osobowe podane dobrowolnie przez Użytkowników w trakcie zapisywania się do poszczególnych usług oferowanych przez Serwis.</p>
                    <p>Anonimowe dane gromadzone automatycznie:</p>
                    <ul>
                        <li>Adres IP</li>
                        <li>Przybliżona lokalizacja</li>
                        <li>Otwierane podstrony serwisu</li>
                        <li>Czas spędzony na odpowiedniej podstronie serwisu</li>
                    </ul>
                    <p>
                        Dane gromadzone podczas rejestracji:
                    </p>
                    <ul>
                        <li>Imię / nazwisko / pseudonim</li>
                        <li>Adres e-mail</li>
                        <li>Adres zamieszkania</li>
                        <li>Numer telefonu</li>
                        <li>Adres IP (zbierane automatycznie)</li>
                    </ul>
                    <p>
                        Dane gromadzone podczas zapisu do usługi Newsletter
                    </p>
                    <ul>
                        <li>Imię / nazwisko / pseudonim</li>
                        <li>Adres e-mail</li>
                        <li>Adres IP (zbierane automatycznie)</li>
                    </ul>
                    <p>
                        Część danych (bez danych identyfikujących) może być przechowywana w plikach cookies. Cześć danych (bez danych identyfikujących) może być przekazywana do dostawcy usług statystycznych.
                    </p>
                </div>

                <div>
                    <h3>§9 Dostęp do danych osobowych przez podmioty trzecie</h3>
                    <p>Co do zasady jedynym odbiorcą danych osobowych podawanych przez Użytkowników jest Administrator. Dane gromadzone w ramach świadczonych usług nie są przekazywane ani odsprzedawane podmiotom trzecim.</p>
                    <p>Dostęp do danych (najczęściej na podstawie Umowy powierzenia przetwarzania danych) mogą posiadać podmioty, odpowiedzialne za utrzymania infrastruktury i usług niezbędnych do prowadzenia serwisu tj.:</p>
                    <ul>
                        <li>Firmy pośredniczące w płatnościach on-line za towaru lub usługi oferowane w ramach Serwisu (w przypadku dokonywania transakcji zakupu w Serwisie)</li>
                        <li>Firmy odpowiedzialne za dostarczanie produktów fizycznych do Użytkownika (usługi pocztowe / kurierskie w przypadku dokonywania transakcji zakupu w Serwisie)</li>
                    </ul>
                    <p>Przetwarzanie danych w przypadku płatności on-line</p>
                    <p>W przypadku realizacji płatności on-line, wszelkie dane dotyczące płatności przekazywane są bezpośrednio przez Użytkownika podmiotowi realizującemu płatność - . Wybrane dane niezbędne do realizacji transakcji są następnie przekazywane przez ten podmiot Administratorowi. Przekazanie danych reguluje umowa zawarta pomiędzy Administratorem a Usługodawcą</p>
                    <p>Przekazanie danych osobowych - Usługi Kurierskie</p>
                    <p>W przypadku zawarcia transakcji, która wymaga przekazania przedmiotu, którego dotyczyła transakcja, poprzez pocztę lub za pośrednictwem kuriera, część danych osobowych osób fizycznych lub dane osób fizycznych prowadzących działalność gospodarczą, jest przekazywana podmiotowi świadczącemu na rzecz Administratora usługi pocztowe / kurierskie, wybranego przez Użytkownika. Przekazanie tych danych reguluje umowa zawarta pomiędzy Administratorem a Usługodawcą.</p>
                </div>
                <div>
                    <h3>§10 Sposób przetwarzania danych osobowych</h3>
                    <p>
                        Dane osobowe podane dobrowolnie przez Użytkowników:
                    </p>
                    <ul>
                        <li>Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że zostały opublikowane na skutek indywidualnego działania Użytkownika (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą dostępne dla każdej osoby odwiedzającej serwis.</li>
                        <li>Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji (profilowania).</li>
                        <li>Dane osobowe nie będą odsprzedawane podmiotom trzecim.</li>
                    </ul>
                    <p>Dane anonimowe (bez danych osobowych) gromadzone automatycznie:</p>
                    <ul>
                        <li>Dane anonimiwe (bez danych osobowych) nie będą przekazywane poza Unię Europejską.</li>
                        <li>Dane anonimiwe (bez danych osobowych) nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji (profilowania).</li>
                        <li>Dane anonimiwe (bez danych osobowych) nie będą odsprzedawane podmiotom trzecim.</li>
                    </ul>
                </div>
                <div>
                    <h3>
                        §11 Podstawy prawne przetwarzania danych osobowych
                    </h3>
                    <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
                    <ul>
                        <li>Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)</li>
                        <ul>
                            <li>art. 6 ust. 1 lit. a<p>osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów</p></li>
                            <li>art. 6 ust. 1 lit. b<p>przetwarzanie jest niezbędne do wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy</p></li>
                            <li>art. 6 ust. 1 lit. f <p>przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora lub przez stronę trzecią</p></li>
                        </ul>
                        <li>Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000)</li>
                        <li>Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800)</li>
                        <li>Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. 1994 Nr 24 poz. 83)</li>
                    </ul>
                </div>
                <div>
                    <h3>§12 Okres przetwarzania danych osobowych</h3>
                    <p>Dane osobowe podane dobrowolnie przez Użytkowników:</p>
                    <p>Co do zasady wskazane dane osobowe są przechowywane wyłącznie przez okres świadczenia Usługi w ramach Serwisu przez Administratora. Są one usuwane lub anonimizowane w okresie do 30 dni od chwili zakończenia świadczenia usług (np. usunięcie zarejestrowanego konta użytkownika, wypisanie z listy Newsletter, itp.)</p>
                    <p>Wyjątek stanowi sytuacja, która wymaga zabezpieczenia prawnie uzasadnionych celów dalszego przetwarzania tych danych przez Administratora. W takiej sytuacji Administrator będzie przechowywał wskazane dane, od czasu żądania ich usunięcia przez Użytkownika, nie dłużej niż przez okres 3 lat w przypadku naruszenia lub podejrzenia naruszenia zapisów regulaminu serwisu przez Użytkownika</p>
                    <p>Dane anonimowe (bez danych osobowych) gromadzone automatycznie:</p>
                    <p>Anonimowe dane statystyczne, niestanowiące danych osobowych, są przechowywane przez Administratora w celu prowadzenia statystyk serwisu przez czas nieoznaczony</p>
                </div>

                <div>
                    <h3>§13 Prawa Użytkowników związane z przetwarzaniem danych osobowych</h3>
                    <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
                    <ul>
                        <li>Prawo dostępu do danych osobowych<br />
                            Użytkownikom przysługuje prawo uzyskania dostępu do swoich danych osobowych, realizowane na żądanie złożone do Administratora</li>
                        <li>Prawo do sprostowania danych osobowych<br />
                            Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego sprostowania danych osobowych, które są nieprawidłowe lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane na żądanie złożone do Administratora</li>
                        <li>Prawo do usunięcia danych osobowych<br />
                            Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego usunięcia danych osobowych, realizowane na żądanie złożone do AdministratoraW przypadku kont użytkowników, usunięcie danych polega na anonimizacji danych umożliwiających identyfikację Użytkownika. Administrator zastrzega sobie prawo wstrzymania realizacji żądania usunięcia danych w celu ochrony prawnie uzasadnionego interesu Administratora (np. w gdy Użytkownik dopuścił się naruszenia Regulaminu czy dane zostały pozyskane wskutek prowadzonej korespondencji).
                            W przypadku usługi Newsletter, Użytkownik ma możliwość samodzielnego usunięcia swoich danych osobowych korzystając z odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.</li>
                        <li>Prawo do ograniczenia przetwarzania danych osobowych<br />
                            Użytkownikom przysługuje prawo ograniczenia przetwarzania danych osobowych w przypadkach wskazanych w art. 18 RODO, m.in. kwestionowania prawidłowość danych osobowych, realizowane na żądanie złożone do Administratora</li>
                        <li>Prawo do przenoszenia danych osobowych<br />
                            Użytkownikom przysługuje prawo uzyskania od Administratora, danych osobowych dotyczących Użytkownika w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, realizowane na żądanie złożone do Administratora</li>
                        <li>Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych<br />
                            Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec przetwarzania jego danych osobowych w przypadkach określonych w art. 21 RODO, realizowane na żądanie złożone do Administratora</li>
                        <li>Prawo wniesienia skargi<br />
                            Użytkownikom przysługuje prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.</li>
                    </ul>
                </div>
                <div>
                    <h3>§14 Kontakt do Administratora</h3>
                    <p>Z Administratorem można skontaktować się w jeden z poniższych sposobów</p>
                    <ul>
                        <li>Adres poczty elektronicznej - nowakowskimarcel01@gmail.com</li>
                        <li>Połączenie telefoniczne - 515555372</li>
                        <li>Adres poczty elektronicznej - nowakowskimarcel01@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>§15 Wymagania Serwisu</h3>
                    <ul>
                        <li>Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu Użytkownika może spowodować nieprawidłowe działanie niektórych funkcji Serwisu.</li>
                        <li>Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo działające funkcje Serwisu w przypadku gdy Użytkownik ograniczy w jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie.</li>
                    </ul>
                </div>

                <div>
                    <h3>§16 Linki zewnętrzne</h3>
                    <p>W Serwisie - artykułach, postach, wpisach czy komentarzach Użytkowników mogą znajdować się odnośniki do witryn zewnętrznych, z którymi Właściciel serwisu nie współpracuje. Linki te oraz strony lub pliki pod nimi wskazane mogą być niebezpieczne dla Twojego Urządzenia lub stanowić zagrożenie bezpieczeństwa Twoich danych. Administrator nie ponosi odpowiedzialności za zawartość znajdującą się poza Serwisem.</p>
                </div>
                <div>
                    <h3>§17 Zmiany w Polityce Prywatności</h3>
                    <ul>
                        <li>Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki Prywatności bez konieczności informowania o tym Użytkowników w zakresie stosowania i wykorzystywania danych anonimowych lub stosowania plików Cookie.</li>
                        <li>Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki Prywatności w zakresie przetwarzania Danych Osobowych, o czym poinformuje Użytkowników posiadających konta użytkownika lub zapisanych do usługi newsletter, za pośrednictwem poczty elektronicznej w terminie do 7 dni od zmiany zapisów. Dalsze korzystanie z usług oznacza zapoznanie się i akceptację wprowadzonych zmian Polityki Prywatności. W przypadku w którym Użytkownik nie będzie się zgadzał z wprowadzonymi zmianami, ma obowiązek usunąć swoje konto z Serwisu lub wypisać się z usługi Newsletter.</li>
                        <li>Wprowadzone zmiany w Polityce Prywatności będą publikowane na tej podstronie Serwisu.</li>
                        <li>Wprowadzone zmiany wchodzą w życie z chwilą ich publikacji.</li>
                    </ul>
                </div>
            </motion.div>
        </>
    )
}

export default PolitykaPrywatnosci