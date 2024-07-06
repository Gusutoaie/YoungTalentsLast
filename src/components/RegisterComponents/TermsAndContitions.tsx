import React from 'react';
import classes from './TermsAndConditions.module.css';

export default function TermsAndConditions() {
  return (
    <div className={classes.termsContainer}>
      <a href="javascript:void(0);" className={classes.hideTerms} onClick={() => window.location.reload()}>
        Ascunde
      </a>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  {/* Add your terms and conditions content here */}
                  <p><b>Introducere</b></p>
                  <p><span style={{ fontWeight: 400 }}>Confidențialitatea vizitatorilor website-ului nostru este foarte importantă pentru noi și ne luăm angajamentul să o protejăm. Această politică explică ce vom face cu informațiile dumneavoastră personale.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Acordarea consimțământului asupra utilizării cookie-urilor în concordanță cu termenii acestei politici atunci când vizitați website-ul nostru pentru prima dată, ne permite să utilizăm cookie-uri de fiecare dată când vizitați website-ul nostru.</span></p>
                  <p><b>Cine suntem</b></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;Confidentialitatea datelor tale cu caracter personal este importanta pentru noi. Acest angajament de respectare a confidentialitatii iti explica ce date cu caracter personal colecteaza&nbsp;organizatia nosatra&nbsp;de la tine, prin intermediul interactiunilor noastre si modul in care utilizam datele respective.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Datele noastre de identificare sunt urmatoarele:</span></p>
                  <p><span style={{ fontWeight: 400 }}>Denumirea organizatiei: Universitatea de Vest din Timisoara</span></p>
                  <p><span style={{ fontWeight: 400 }}>Adresa:&nbsp;Bulevardul Vasile Pârvan 4, Timișoara 300223</span></p>
                  <p><span style={{ fontWeight: 400 }}>Telefon:&nbsp;0256-592 292</span></p>
                  <p><span style={{ fontWeight: 400 }}>E-mail:</span> <span style={{ fontWeight: 400 }}>alumni@e-uvt.ro</span></p>
                  <p><span style={{ fontWeight: 400 }}>Responsabilul pentru protectia datelor (DPO) este&nbsp;Dragoi Ionut e-mail: ionut.dragoi@e-uvt.ro</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p><b>Ce sunt datele cu caracter personal?</b></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;„Datele personale” sau “datele cu caracter personal” sunt acele informatii unice individuale privind o persoana fizica identificata sau identificabila („persoana vizata”), referitoare la nume, adresa, cod numeric personal, IP sau numar de telefon, date de localizare, un identificator online,&nbsp;sau&nbsp;la unul sau mai multe elemente specifice, proprii identitatii fizice, fiziologice, genetice, psihice, economice, culturale sau sociale.</span></p>
                  <p><span style={{ fontWeight: 400 }}>De fiecare data cand solicitam datele tale personale o sa iti explicam scopul pentru care ne sunt necesare, unde pastram datele tale si cine are acces la acestea. Bineinteles, te informam ca oricand doresti, iti punem la dispozitie informatiile pe care le detinem despre tine si bineinteles ca le vom sterge daca ne soliciti acest lucru.</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p><b>Ce date personale colectam si de ce le colectam?</b></p>
                  <p><span style={{ fontWeight: 400 }}>Colectam date cu caracter personal pentru a putea raspunde cu succes solicitarilor tale sau pentru a te inscrie in programul de mentorat.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Furnizezi unele din aceste date direct, de exemplu, atunci cand ne scrii un mesaj prin intermediul formularului de contact sau al celui de inregistrare, indirect, date de identificare prin adresa ta IP. Noi nu folosim adresa ta IP pentru a te identifica, dar te informam ca aceasta este stocata in momentul in care accesezi website-ul nostru – in principal din motive de securitate.&nbsp;Ai dreptul de a solicita stergerea IP-ului!</span></p>
                  <p><span style={{ fontWeight: 400 }}>In functie de interactiunile pe care le ai cu website-ul nostru, datele cu caracter personal pe care le colectam sunt urmatoarele:</span></p>
                  <p><span style={{ fontWeight: 400 }}>–&nbsp;Nume si prenume – pentru identificare;</span></p>
                  <p><span style={{ fontWeight: 400 }}>–&nbsp;Adresa de email – pentru comunicare;</span></p>
                  <p><span style={{ fontWeight: 400 }}>–&nbsp;Numar de telefon – pentru comunicare;</span></p>
                  <p><span style={{ fontWeight: 400 }}>–&nbsp;Companie – pentru identificare;</span></p>
                  <p><span style={{ fontWeight: 400 }}>–&nbsp;Domeniu de activitate – pentru identificare;</span></p>
                  <p><span style={{ fontWeight: 400 }}>Pot fi colectate, stocate și utilizate următoarele tipuri de informații personale:</span></p>
                  <ol>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informații despre computer, inclusiv adresa IP, locația geografică, tipul și versiunea browser-ului și despre sistemul de operare;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informații despre vizitele și utilizarea acestui website, inclusiv sursa de recomandare, durata vizitei, vizualizările paginii și căile de navigare pe website;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informații precum adresa dvs. de e-mail, pe care le introduceți atunci când vă înregistrați pe website-ul nostru;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informațiile pe care le introduceți atunci când creați un profil pe website-ul nostru – de exemplu, numele dvs., pozele de profil, detalii academice și detalii despre ocupație;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informații precum numele și adresa dvs. de e-mail, pe care le introduceți pentru a configura abonările la e-mailurile și/sau la buletinele noastre informative;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informațiile pe care le introduceți în timp ce utilizați serviciile de pe website-ul nostru;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informații care sunt generate în timp ce utilizați website-ul nostru, inclusiv despre când, cât de des și în ce circumstanțe îl utilizați;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informațiile pe care le postați pe website-ul nostru cu intenția de a le publica pe internet, care pot include numele dvs. de utilizator, imaginile de profil și conținutul postărilor;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>informații conținute în orice comunicări ne trimiteți prin e-mail sau prin intermediul website-ului nostru, inclusiv conținutul comunicărilor și metadatele acestora;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>orice alte informații personale pe care ni le trimiteți voluntary sau la cerere, după caz</span></li>
                  </ol>
                  <p><span style={{ fontWeight: 400 }}>Date transmise involuntar, atunci cand interactionezi cu website-ul nostru:</span></p>
                  <p><span style={{ fontWeight: 400 }}>Adresa IP&nbsp;– Atunci cand vizitezi website-ul nostru, adresa IP este inregistrata. Insa noi NU folosim adresa ta de IP pentru a te identifica sau pentru a fi folosita in alte scopuri.&nbsp;</span></p>
                  <p><span style={{ fontWeight: 400 }}>Sistemul de operare, browserul, activitatea de navigare si alte informatii despre modul in care ai interactionat cu website-ul. Putem colecta aceste informatii prin folosirea cookies sau a altor tehnologii similare. Pentru detalii va rugam sa consultati si&nbsp;</span><a href="https://www.zf.ro/politica-de-cookies"><span style={{ fontWeight: 400 }}>Politica privind fisierele cookies</span></a></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span><span style={{ fontWeight: 400 }}>Informațiile personale transmise prin intermediul website-ului nostru vor fi utilizate în scopurile specificate de această politică sau în paginile respective ale website-ului. Putem folosi informațiile dvs. personale pentru:</span></p>
                  <ol>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>administrarea website-ului și a universitatii noastre;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>personalizarea website-ului nostru pentru dvs.;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>autorizarea utilizării serviciilor disponibile pe website-ul nostru;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>trimiterea de comunicări în vederea informării;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>trimiterea prin e-mail de notificări solicitate în mod expres;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>trimiterea buletinului nostru informativ prin e-mail, dacă l-ați solicitat (ne puteți informa oricând dacă nu mai doriți această comunicare);</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>trimiterea de comunicări de marketing;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>furnizarea către terți a informațiilor statistice despre utilizatorii noștri (acești terți nu vor putea identifica niciun utilizator cu ajutorul acestor informații);</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>abordarea solicitărilor și reclamațiilor făcute de dvs. sau despre dvs. referitoare la website-ul nostru;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>păstrarea securității website-ului nostru și prevenirea fraudelor;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>verificarea respectării termenilor și condițiilor care reglementează utilizarea website-ului nostru (inclusiv monitorizarea mesajelor private trimise prin intermediul serviciului nostru de mesagerie privată).</span></li>
                  </ol>
                  <p>&nbsp;</p>
                  <p><b>Care este temeiul legal pentru prelucrarea acestor date?</b></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;Datele pe care ni le oferi voluntar (nume, prenume, telefon, adresa de email) – temeiul legal este diferit:</span></p>
                  <p><span style={{ fontWeight: 400 }}>– consimtamantul tau. (art. 6 alin. (1) lit a din Regulamentul (UE) 679/2016) pentru activitatile de marketing direct, transmiterea de newsletter, invitatii la evenimente, etc</span></p>
                  <p><span style={{ fontWeight: 400 }}>–&nbsp;demersuri la cererea persoanei vizate inainte de incheierea unui contract sau pentru executarea unui contract&nbsp;(art. 6 alin. (1) lit. b si c din Regulamentul (UE) 679/2016)&nbsp;</span></p>
                  <p><span style={{ fontWeight: 400 }}>In privinta datelor pe care le colectam automat prin folosirea cookies sau a altor tehnologii similare, temeiul pentru prelucrare este consimtamantul. Odata cu accesarea website-ului si selectarea optiunii&nbsp;DA/De acord&nbsp;iti dai in mod valabil consimtamantul asupra prelucrarii. Pentru detalii va rugam sa consultati si&nbsp;</span><a href="https://www.zf.ro/politica-de-cookies"><span style={{ fontWeight: 400 }}>Politica privind fisierele cookies</span></a></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p><b>Care este scopul colectarii datelor si cum folosim informatiile tale personale?</b></p>
                  <p><span style={{ fontWeight: 400 }}>Poti opta in legatura cu datele pe care le colectam. Atunci cand ti se solicita sa furnizezi date cu caracter personal, ai dreptul sa refuzi.&nbsp;Daca alegi sa nu furnizezi date care sunt necesare pentru a furniza un serviciu sau pentru a comunica cu noi, exista posibilitatea sa nu poti obtine informatiile pe care le doresti&nbsp;(de exemplu prin transmiterea informatiilor poti plasa o comanda pe website).</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span><b><i>Numele si prenumele</i></b></p>
                  <p>&nbsp;</p>
                  <table>
                    <tbody>
                      <tr>
                        <td><b><i>&nbsp;Cum iti folosim numele si prenumele?</i></b></td>
                        <td><b><i>De ce?</i></b></td>
                      </tr>
                      <tr>
                        <td><span style={{ fontWeight: 400 }}>Contactul cu tine</span></td>
                        <td><span style={{ fontWeight: 400 }}>Este necesar ca tu sa ne furnizezi anumite date personale pentru a putea incepe comunicarea, a te inregistra pe site</span></td>
                      </tr>
                      <tr>
                        <td><span style={{ fontWeight: 400 }}>Detectarea si prevenirea fraudelor</span></td>
                        <td><span style={{ fontWeight: 400 }}>Pentru a preveni folosirea datelor tale de catre alti utilizatori, poate fi necesar sa iti trimitem mailuri pentru a-ti confirma identitatea.</span></td>
                      </tr>
                      <tr>
                        <td><span style={{ fontWeight: 400 }}>Asistenta</span></td>
                        <td><span style={{ fontWeight: 400 }}>Folosim datele pentru a oferi servicii de asistenta&nbsp;</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <p><b><i>Informatii despre telefon, laptop sau tableta si despre cum folosesti website-ul</i></b></p>
                  <p><span style={{ fontWeight: 400 }}>Informatiile pe care ni le dai cand navighezi pe website-ul nostru, inclusiv adresa IP si tipul dispozitivului. Totodata, salvam informatii despre modul in care folosesti website-ul si aplicatia.</span></p>
                  <table>
                    <tbody>
                      <tr>
                        <td><b><i>&nbsp;Cum folosim informatiile despre telefonul, laptopul sau tableta ta si despre cum folosesti website-ul</i></b></td>
                        <td><b><i>De ce?</i></b></td>
                      </tr>
                      <tr>
                        <td><span style={{ fontWeight: 400 }}>Imbunatatim experienta ta pe website, oferindu-ti versiunea cel mai bine adaptata dispozitivului tau.</span></td>
                        <td><span style={{ fontWeight: 400 }}>Oferirea celei mai bune experiente de navigare pe website.</span></td>
                      </tr>
                      <tr>
                        <td><span style={{ fontWeight: 400 }}>Protejam website-ul</span></td>
                        <td><span style={{ fontWeight: 400 }}>Pentru a preveni si a detecta fraudele impotriva ta sau a website-ului nostru. Pentru a putea asigura confidentialitatea datelor.</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <p><span style={{ fontWeight: 400 }}>Nu esti obligat sa ne oferi niciuna din informatiile de mai sus, insa daca nu faci asta, s-ar putea sa nu ai posibilitatea de a te bucura de deplina experienta de navigare pe website-ul nostru.</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p>&nbsp;</p>
                  <p><b>Perioada de retentie a datelor</b></p>
                  <p><span style={{ fontWeight: 400 }}>Stocam datele cu caracter personal doar pe perioada necesara indeplinirii scopurilor, dar numai pana la momentul in care hotarasti sa iti dezactivezi contul de utilizator.</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p><b>Cui transferam date cu caracter personal?</b></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;Nu vom dezvalui informatiile tale catre terte parti, pentru a fi utilizate in propriile scopuri de marketing sau comerciale ale acestora, fara consimtamantul tau.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Totusi, este posibil sa dezvaluim informatiile tale catre urmatoarele entitati:</span></p>
                  <p><b><i>Furnizori de servicii</i></b><span style={{ fontWeight: 400 }}>. Putem dezvalui informatiile tale altor companii care ne furnizeaza servicii si actioneaza in calitate de persoane imputernicite, cum ar fi companiilor care se ocupa de mentenanta website-ului sau care trimit e-mailuri in numele nostru.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Aceste entitati sunt selectate cu o grija deosebita pentru a ne asigura ca indeplinesc cerintele specifice in materie de protectie a datelor cu caracter personal. Aceste entitati au o capacitate limitata de a utiliza informatiile tale in alte scopuri decat cel de a ne furniza servicii.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Informatiile oferite de tine, ce contin date de identificare pot fi folosite in comunicari comerciale sau raspunsuri la solicitarile trimise de tine, iar in cazul unor solicitari legitime, vor fi transmise catre autoritatile statului sau altor parti cu consimtamantul sau la instructiunile tale.</span></p>
                  <p><span style={{ fontWeight: 400 }}>In afara dezvaluirilor descrise in prezenta&nbsp;Politica de confidentialitate, este posibil sa transmitem informatii tertilor carora consimti sau soliciti sa efectuam o asemenea dezvaluire.</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p><span style={{ fontWeight: 400 }}>Putem divulga informațiile tale personale oricăruia dintre angajații, consilierii profesioniști, furnizorii sau subcontractanții noștri după cum este necesar în mod rezonabil pentru scopurile prevăzute în această politică.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Putem dezvălui informațiile tale personale oricărui membru al grupului nostru, după cum este necesar în mod rezonabil pentru scopurile prevăzute în această politică.</span></p>
                  <p>&nbsp;</p>
                  <p><span style={{ fontWeight: 400 }}>Putem divulga informațiile tale personale:</span></p>
                  <ol>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>în măsura în care ni se solicită acest lucru prin lege;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>în legătură cu orice procedură legală potențială sau în curs;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>pentru a stabili, exercita sau apăra drepturile noastre legale (inclusiv furnizarea de informații către terți în scopul prevenirii fraudelor);</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>oricărei persoane considerăm în mod rezonabil că s-ar putea adresa unei instanțe sau unei alte autorități competente pentru divulgarea informațiilor personale în cazul în care, în opinia noastră rezonabilă, o astfel de instanță sau autoritate ar putea să dispună divulgarea informațiilor personale.</span></li>
                  </ol>
                  <p><span style={{ fontWeight: 400 }}>Cu excepția situațiilor prevăzute în această politică, nu vom furniza informațiile dvs. personale către terți.</span></p>
                  <p>&nbsp;</p>
                  <p><b>Ce drepturi ai ca persoana vizata?</b></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;Protecţia persoanelor fizice în ceea ce priveşte prelucrarea datelor cu caracter personal este un drept fundamental. Articolul 8 alineatul (1) din Carta drepturilor fundamentale a Uniunii Europene („carta”) şi articolul 16 alineatul (1) din Tratatul privind funcţionarea Uniunii Europene (TFUE) prevăd dreptul oricărei persoane la protecţia datelor cu caracter personal.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Drepturile persoanelor vizate privind protectia persoanelor cu privire la prelucrarea datelor cu caracter personal si libera circulatie a acestor date: dreptul la informare si acces; dreptul de interventie asupra datelor; dreptul la rectificare; dreptul la stergerea datelor; dreptul la restrictionarea prelucrarii; dreptul la portabilitatea datelor; dreptul de opozitie si procesul decizional individual automatizat, inclusiv crearea de profiluri; dreptul de a depune o plangere în faţa autorităţii de supraveghere (</span><a href="http://www.dataprotection.ro"><span style={{ fontWeight: 400 }}>www.dataprotection.ro</span></a><span style={{ fontWeight: 400 }}>).</span></p>
                  <p><span style={{ fontWeight: 400 }}>În conformitate cu prevederile Regulamentului UE 2016/679 (GDPR), persoanele fizice ale căror date cu caracter personal sunt/vor fi prelucrate (colectate, stocate, procesate, transmise, eliminate) sunt:&nbsp;</span></p>
                  <h2><span style={{ fontWeight: 400 }}>1. DREPTUL LA INFORMARE</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Avem obligatia de a informa persoanele vizate despre procesul de colectare/procesare/transmitere de date personale.</span></p>
                  <p><i><span style={{ fontWeight: 400 }}>Excepție: în situația în care persoanele fizice transmit voluntar datele sau când aceste date sunt preluate de la un alt operator/terță parte.</span></i></p>
                  <p><span style={{ fontWeight: 400 }}>Trebui să informăm persoana vizată, la solicitarea acesteia, despre:</span></p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>identitatea și datele de contact ale operatorului și procesatorului</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>datele de contact ale Data Protection Officer&nbsp;</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>scopul și temeiul juridic în care sunt colectate datele</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>interesele legitime ale operatorului dacă prelucrarea se face în baza Art. 6 alin.1 lit. f</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>destinatarii sau categoriile de destinatari ai datelor cu caracter personal</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>intenția operatorului de a transfera datele către terțe părți, dacă este cazul</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>perioada pe care vor fi stocate datele sau, dacă nu este posibil, criterii folosite pentru a determina acea perioadă</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>drepturile persoanelor vizate</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>dreptul de a depune o plângere unei autorități de supraveghere</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>obligația de a furniza datele derivată din obligații legale sau contractuale și eventualele consecințe în cazul neconformării</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>existența unui proces decizional automatizat incluzând crearea de profiluri și informații privind logica utilizată și importanța și consecințele unei astfel de prelucrări pentru persoana vizată</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>pentru prelucrări ulterioare în scopuri diferite, informații prealabile privind scopul secundar</span></li>
                    <li style={{ fontWeight: 400 }} aria-level={1}><span style={{ fontWeight: 400 }}>sursa din care provin datele personale dacă acestea nu au fost colectate direct de la persoana fizică vizată.</span></li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2><span style={{ fontWeight: 400 }}>2. DREPTUL LA RECTIFICARE</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Avem obligația de a modifica/corecta/completa datele cu caracter personal la solicitarea persoanelor fizice vizate sau de a oferi acestora posibilitatea actualizării acestor date.</span></p>
                  <p><span style={{ fontWeight: 400 }}>În unele situații, poate fi necesară o declarație suplimentară a persoanei fizice vizate. Deasemeni, poate fi necesar să luăm măsuri suplimentare pentru a ne asigura de legalitatea și corectitudinea modificărilor solicitate/realizate.</span></p>
                  <h2><span style={{ fontWeight: 400 }}>3. DREPTUL DE PORTABILITATE A DATELOR</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Avem obligația ca, la solicitarea persoanelor fizice vizate, să le punem acestora la dispozitie datele cu caracter personal colectate/prelucrate, într-un format structurat, prelucrabil și interoperabil.</span></p>
                  <p><span style={{ fontWeight: 400 }}>În unele situații, poate fi necesar să luăm măsuri suplimentare pentru a ne asigura de identitatea persoanei fizice care solicită portarea datelor cu caracter personal.</span></p>
                  <p>&nbsp;</p>
                  <h2><span style={{ fontWeight: 400 }}>4. DREPTUL DE STERGERE (DE A FI UITAT)</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Avem obligația ca, la solicitarea persoanelor fizice vizate, să ștegem datele cu caracter personal ale acestora, dacă nu există prevederi legale aplicabile care ne obligă să reținem acele date sau dacă nu există vreun interes legitim al operatorului care să prevaleze acestui drept.</span></p>
                  <p>&nbsp;</p>
                  <h2><span style={{ fontWeight: 400 }}>5. DREPTUL DE RESTRICTIONARE A PRELUCRĂRII DE DATE</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Avem obligația ca, la solicitarea persoanelor fizice vizate și în cazul în care nu există vreun temei juridic sau interes legitim care să prevaleze, să oprim orice colectare/prelucrare de date cu caracter personal ale solicitantului.</span></p>
                  <p>&nbsp;</p>
                  <h2><span style={{ fontWeight: 400 }}>6. DREPTUL DE OPOZITIE (DE A SE OPUNE PRELUCRĂRII DE DATE)</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Avem obligația ca în cazul în care persoanele fizice se opun colectării/procesării de date personale să nu efectuăm nicio activitate de prelucrare a acelor date, excepție făcând situațiile în care primează un temei juridic sau un interes legitim al nostru.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Persoanele fizice au dreptul de a se opune in orice moment, in mod gratuit si fara nicio justificare, ca datele care le vizeaza sa fie prelucrate in scop de marketing direct, in numele operatorului sau al unui tert, sau sa fie dezvaluite unor terti in asemenea scop.</span></p>
                  <p>&nbsp;</p>
                  <h2><span style={{ fontWeight: 400 }}>7. DREPTUL DE A SE OPUNE PROCESULUI DECIZIONAL AUTOMATIZAT</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Persoana vizată are dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată, inclusiv crearea de profiluri, care produce efecte juridice ce privesc persoana respectivă sau o afectează într-o măsură semnificativă. Persoana vizată are dreptul de a obține intervenție umană din partea operatorului, de a-și exprima punctul de vedere și de a contesta decizia dacă s-a realizat deja un proces decizional automatizat.</span></p>
                  <p>&nbsp;</p>
                  <h2><span style={{ fontWeight: 400 }}>8. DREPTUL DE A FACE O PLÂNGERE SAU DE ADRESARE UNEI INSTANȚE</span></h2>
                  <p><span style={{ fontWeight: 400 }}>Persoanele fizice vizate de prelucrarea datelor lor personale se pot adresa la:</span></p>
                  <ol>
                    <li><b>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal</b></li>
                  </ol>
                  <ul>
                    <li aria-level={1}><b>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336, București, România</b></li>
                  </ul>
                  <ul>
                    <li aria-level={1}><a href="http://www.dataprotection.ro"><span style={{ fontWeight: 400 }}>www.dataprotection.ro</span></a><span style={{ fontWeight: 400 }}>&nbsp;</span></li>
                  </ul>
                  <ol start={2}>
                    <li><span style={{ fontWeight: 400 }}> Instanțelor de judecată</span></li>
                  </ol>
                  <p>&nbsp;</p>
                  <p><b>Modificări</b></p>
                  <p><span style={{ fontWeight: 400 }}>Ne rezervăm dreptul de a actualiza această politică din când în când publicând o versiune nouă pe website-ul nostru. Trebuie să verificați ocazional această pagină pentru a vă asigura că înțelegeți orice modificare adusă acestei politici. Vă putem anunța despre modificările aduse acestei politici prin e-mail sau prin sistemul de mesagerie privată de pe website-ul nostru.</span></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;</span></p>
                  <p><b>Contact</b></p>
                  <p><span style={{ fontWeight: 400 }}>&nbsp;Daca ai nevoie de orice informatii legate de website-ul sau serviciile noastre, ne poti contacta la adresa de e-mail: <em><strong>alumni@e-uvt.ro</strong></em></span></p>
                  <p><span style={{ fontWeight: 400 }}>Daca:</span></p>
                  <p><span style={{ fontWeight: 400 }}>– vrei sa afli mai multe detalii despre informatiile din aceasta pagina,</span></p>
                  <p><span style={{ fontWeight: 400 }}>– vrei sa nu mai folosim informatiile pe care le avem despre tine,</span></p>
                  <p><span style={{ fontWeight: 400 }}>– vrei sa iti exerciti oricare din drepturile enumerate mai sus,</span></p>
                  <p><span style={{ fontWeight: 400 }}>– sau daca ai o plangere la adresa noastra.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Te rugam sa ne scrii la adresa de email <em><strong>alumni@e-uvt.ro</strong></em></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
