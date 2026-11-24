---
layout: default
title: "Zadania z vector - zadania z plikami danych"
---

# Zadania z plikami danych

Teraz łączysz kilka operacji w jednym programie. Każdy zestaw danych jest stały. Możesz więc porównać własny wynik z wynikiem rozwiązania.

[Wróć do zbioru zadań]({{ '/12-vector/zadania/' | relative_url }})

## Jak użyć pobranego pliku?

Programy nadal pobierają dane przez `cin`. Nie potrzebujesz jeszcze `ifstream`.

- Otwórz pobrany plik w edytorze. Skopiuj całą zawartość i wklej ją do konsoli uruchomionego programu. Jeśli ostatni wiersz nie został zatwierdzony, naciśnij Enter.
- Możesz też przekierować standardowe wejście. W wierszu polecenia Windows (`cmd.exe`), w katalogu z programem i plikiem, wpisz:

```text
program.exe < temperatury.txt
```

Ogólny zapis to `program.exe < nazwa-pliku.txt`. Dla programu dane nadal trafiają do `cin`, ale pochodzą z pliku zamiast z klawiatury. Operator `<` w tym zapisie obsługuje `cmd.exe`. Jeśli pracujesz w PowerShell, otwórz w tym katalogu `cmd` i tam wpisz polecenie. Przed uruchomieniem rozpakuj ZIP.

[Pobierz wszystkie dane w ZIP]({{ '/assets/downloads/vector/dane-vector.zip' | relative_url }})

W rozwiązaniach używaj C++23. Dane spełniają opisane ograniczenia. Indeksy liczymy od `0`. Dodatkowe spacje na końcach wierszy z listami nie mają znaczenia.

## Zadanie 11 - Pomiary temperatury

Stacja zapisała temperatury w kolejnych chwilach. Wczytaj je do `vector`. Wyznacz minimum, maksimum, liczbę wzrostów względem bezpośrednio poprzedniego pomiaru oraz długość najdłuższego spójnego fragmentu bez spadku.

Równa temperatura nie jest wzrostem, ale przedłuża fragment bez spadku. Długość fragmentu oznacza liczbę pomiarów, nie liczbę porównań.

[Pobierz temperatury.txt]({{ '/assets/downloads/vector/temperatury.txt' | relative_url }})

### Dane wejściowe

- Pierwszy wiersz: liczba pomiarów `n`, od `1` do `10000`.
- Następnie `n` temperatur całkowitych od `-90` do `60` stopni Celsjusza. Mogą zajmować wiele wierszy.

### Wynik

Cztery wiersze z etykietami `Minimum:`, `Maksimum:`, `Wzrosty:` i `Bez spadku:`, a po nich odpowiednie liczby.

### Przykład wejścia

```text
8
-2 -2 1 0 0 3 3 5
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 11</summary>

```text
Minimum: -2
Maksimum: 5
Wzrosty: 3
Bez spadku: 5
```

Wzrosty to przejścia `-2 => 1`, `0 => 3` oraz `3 => 5`. Najdłuższy fragment bez spadku to `0 0 3 3 5`. Równe sąsiednie pomiary są w nim dozwolone.

</details>

### Kiedy tego użyć?

Do raportu łączącego zakres temperatur, liczbę zmian i długość spokojnego ocieplenia.

### Kiedy wybrać coś innego?

Jeżeli każda kolejna temperatura ma być ściśle większa, obowiązuje warunek z zadania 3. Tutaj liczymy także odcinki ze stałą temperaturą.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 11</summary>

Zapamiętaj indeks początku obecnego fragmentu bez spadku. Zmień go dopiero przy spadku. Długość otrzymasz z odległości między początkiem i bieżącym indeksem. Minimum i maksimum odnoszą się do całych danych, więc nie zeruj ich po zakończeniu fragmentu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 11</summary>

W tym raporcie obowiązują dwa różne porównania: `>` wykrywa wzrost, a `<` kończy fragment bez spadku. Początek fragmentu pozwala obliczyć jego długość bez osobnego zwiększania licznika serii.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaPomiarow;
    cin >> liczbaPomiarow;
    vector<int> temperatury(liczbaPomiarow);
    for (int indeks = 0; indeks < liczbaPomiarow; indeks++)
    {
        cin >> temperatury[indeks];
    }

    int minimum = temperatury[0];
    int maksimum = temperatury[0];
    int liczbaWzrostow = 0;
    int poczatekFragmentu = 0;
    int najdluzszyFragment = 1;
    for (int indeks = 1; indeks < liczbaPomiarow; indeks++)
    {
        if (temperatury[indeks] < minimum)
        {
            minimum = temperatury[indeks];
        }
        if (temperatury[indeks] > maksimum)
        {
            maksimum = temperatury[indeks];
        }
        if (temperatury[indeks] > temperatury[indeks - 1])
        {
            liczbaWzrostow++;
        }
        if (temperatury[indeks] < temperatury[indeks - 1])
        {
            poczatekFragmentu = indeks;
        }
        int dlugoscFragmentu = indeks - poczatekFragmentu + 1;
        if (dlugoscFragmentu > najdluzszyFragment)
        {
            najdluzszyFragment = dlugoscFragmentu;
        }
    }
    cout << "Minimum: " << minimum << "\n";
    cout << "Maksimum: " << maksimum << "\n";
    cout << "Wzrosty: " << liczbaWzrostow << "\n";
    cout << "Bez spadku: " << najdluzszyFragment << "\n";
    return 0;
}
```

**Typowe błędy:** zaliczanie równości do wzrostów oraz ustawianie minimum na `0`, choć wszystkie pomiary mogą być dodatnie.

</details>

## Zadanie 12 - Zużycie energii

Licznik przekazuje jedną całkowitą wartość zużycia na godzinę, wyrażoną w Wh. Godzina o indeksie `0` to pierwszy odczyt w pliku. Kolejne indeksy oznaczają kolejne godziny pomiaru, także gdy plik obejmuje kilka dni.

Zapisz odczyty w `vector`. Oblicz średnią. Zbuduj osobny `vector` indeksów godzin ze zużyciem ściśle większym od średniej. Wskaż pierwszą godzinę największego zużycia oraz różnicę między największym i najmniejszym odczytem.

[Pobierz zuzycie-energii.txt]({{ '/assets/downloads/vector/zuzycie-energii.txt' | relative_url }})

### Dane wejściowe

- Liczba godzin `n`, od `1` do `168`.
- Następnie `n` całkowitych odczytów od `0` do `1000000` Wh.

### Wynik

- `Srednia:` i średnia z dokładnie dwoma miejscami po kropce dziesiętnej.
- `Ponad srednia:` i rosnąca lista indeksów albo `BRAK`.
- `Pierwsze maksimum:` i indeks pierwszego wystąpienia maksimum.
- `Roznica:` i różnica maksimum oraz minimum.

Do wyboru godzin używaj niezaokrąglonej średniej. Dwa miejsca po kropce dotyczą tylko wyświetlania.

### Przykład wejścia

```text
6
2 5 5 1 3 2
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 12</summary>

```text
Srednia: 3.00
Ponad srednia: 1 2
Pierwsze maksimum: 1
Roznica: 4
```

Suma wynosi `18`, a średnia `3`. Obie wartości `5` przekraczają średnią. Pierwsza z nich ma indeks `1`. Rozstęp wynosi `5 - 1`, czyli `4`.

</details>

### Kiedy tego użyć?

Gdy chcesz oddzielić godziny wymagające uwagi od pełnego rejestru i zachować ich pozycje.

### Kiedy wybrać coś innego?

Jeśli znasz stały próg alarmowy, możesz porównywać odczyty od razu. Próg będący średnią poznajesz dopiero po zsumowaniu danych.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 12</summary>

Najpierw obejrzyj wszystkie odczyty, aby ustalić sumę. Dopiero potem wybieraj godziny. W nowym kontenerze mają znaleźć się numery miejsc, a nie wartości zużycia. Przy porównywaniu z maksimum nie zastępuj wcześniejszego indeksu wynikiem równym.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 12</summary>

Dzielimy sumę przez liczbę godzin jako liczby rzeczywiste. `fixed` i `setprecision(2)` z `<iomanip>` ustawiają tylko sposób zapisu średniej na ekranie. Drugi przebieg buduje listę indeksów.

```cpp
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaGodzin;
    cin >> liczbaGodzin;
    vector<int> zuzycie(liczbaGodzin);
    for (int indeks = 0; indeks < liczbaGodzin; indeks++)
    {
        cin >> zuzycie[indeks];
    }

    long long suma = 0;
    int minimum = zuzycie[0];
    int indeksMaksimum = 0;
    for (int indeks = 0; indeks < liczbaGodzin; indeks++)
    {
        suma += zuzycie[indeks];
        if (zuzycie[indeks] < minimum)
        {
            minimum = zuzycie[indeks];
        }
        if (zuzycie[indeks] > zuzycie[indeksMaksimum])
        {
            indeksMaksimum = indeks;
        }
    }
    double srednia = (double)suma / liczbaGodzin;
    vector<int> godzinyPonadSrednia;
    for (int indeks = 0; indeks < liczbaGodzin; indeks++)
    {
        if (zuzycie[indeks] > srednia)
        {
            godzinyPonadSrednia.push_back(indeks);
        }
    }
    cout << "Srednia: " << fixed << setprecision(2) << srednia << "\n";
    cout << "Ponad srednia: ";
    if (godzinyPonadSrednia.empty())
    {
        cout << "BRAK";
    }
    for (int indeks : godzinyPonadSrednia)
    {
        cout << indeks << " ";
    }
    cout << "\nPierwsze maksimum: " << indeksMaksimum << "\n";
    cout << "Roznica: " << zuzycie[indeksMaksimum] - minimum << "\n";
    return 0;
}
```

**Typowe błędy:** dzielenie całkowite przy średniej, zapisanie wartości zamiast indeksów oraz wybranie ostatniego maksimum przez warunek `>=`.

</details>

## Zadanie 13 - Wyniki biegu

Organizator otrzymał listę zawodników w kolejności rejestracji wyników. Każdy rekord ma numer startowy i czas w pełnych sekundach. Zastosuj prostą strukturę z tymi polami i `vector` takich rekordów.

Znajdź zwycięzcę oraz zawodnika z drugim najlepszym wynikiem bez sortowania. Oblicz różnicę ich czasów. Na końcu wypisz wszystkich, których czas jest większy od czasu zwycięzcy o najwyżej `10` sekund, włącznie ze zwycięzcą.

**Remisy:** niższy czas jest lepszy. Przy równym czasie pierwszeństwo ma zawodnik zapisany wcześniej w danych. Drugi wynik należy do innego zawodnika, ale może mieć ten sam czas. Różnica wynosi wtedy `0`. Lista zawodników blisko zwycięzcy zachowuje kolejność wejścia.

[Pobierz wyniki-biegu.txt]({{ '/assets/downloads/vector/wyniki-biegu.txt' | relative_url }})

### Dane wejściowe

- Liczba zawodników `n`, od `2` do `10000`.
- Kolejne `n` wierszy: unikalny numer startowy od `1` do `1000000` oraz czas od `1` do `1000000` sekund.

### Wynik

- `Zwyciezca:` oraz numer i czas zwycięzcy.
- `Drugi:` oraz numer i czas drugiego zawodnika.
- `Roznica:` oraz różnica drugiego i pierwszego czasu.
- Wiersz `Do 10 sekund:`, a potem po jednym wierszu `numer czas` dla każdego zakwalifikowanego zawodnika.

### Przykład wejścia

```text
5
101 200
102 195
103 205
104 195
105 220
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 13</summary>

```text
Zwyciezca: 102 195
Drugi: 104 195
Roznica: 0
Do 10 sekund:
101 200
102 195
103 205
104 195
```

Remis rozstrzyga kolejność zapisów: numer `102` wystąpił przed `104`. Czas `205` mieści się dokładnie na granicy dziesięciu sekund. Czas `220` ją przekracza.

</details>

### Kiedy tego użyć?

Gdy potrzebujesz dwóch najlepszych rekordów i małego raportu, a pełna kolejność rankingu nie jest potrzebna.

### Kiedy wybrać coś innego?

Do pełnej klasyfikacji wszystkich zawodników przyda się później sortowanie. To zadanie wymaga tylko dwóch pierwszych wyników.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 13</summary>

Najpierw ustal indeks zwycięzcy. Potem poszukaj najlepszego zawodnika spośród pozostałych indeksów. Wykluczasz jednego zawodnika, nie jego czas. Wybierz początkowego kandydata na drugie miejsce tak, aby na pewno był inną osobą.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 13</summary>

Dwa przejścia wybierają kolejno najlepszy rekord i najlepszy z pozostałych. Ścisłe porównania zachowują wcześniejszego zawodnika przy remisie. Nie zmieniamy kolejności danych.

```cpp
#include <iostream>
#include <vector>

using namespace std;

struct Zawodnik
{
    int numer;
    int czas;
};

int main()
{
    int liczbaZawodnikow;
    cin >> liczbaZawodnikow;
    vector<Zawodnik> zawodnicy(liczbaZawodnikow);
    for (int indeks = 0; indeks < liczbaZawodnikow; indeks++)
    {
        cin >> zawodnicy[indeks].numer >> zawodnicy[indeks].czas;
    }

    int indeksZwyciezcy = 0;
    for (int indeks = 1; indeks < liczbaZawodnikow; indeks++)
    {
        if (zawodnicy[indeks].czas < zawodnicy[indeksZwyciezcy].czas)
        {
            indeksZwyciezcy = indeks;
        }
    }
    int indeksDrugiego = 0;
    if (indeksZwyciezcy == 0)
    {
        indeksDrugiego = 1;
    }
    for (int indeks = 0; indeks < liczbaZawodnikow; indeks++)
    {
        if (indeks != indeksZwyciezcy
            && zawodnicy[indeks].czas < zawodnicy[indeksDrugiego].czas)
        {
            indeksDrugiego = indeks;
        }
    }

    int najlepszyCzas = zawodnicy[indeksZwyciezcy].czas;
    cout << "Zwyciezca: " << zawodnicy[indeksZwyciezcy].numer
         << " " << najlepszyCzas << "\n";
    cout << "Drugi: " << zawodnicy[indeksDrugiego].numer
         << " " << zawodnicy[indeksDrugiego].czas << "\n";
    cout << "Roznica: " << zawodnicy[indeksDrugiego].czas - najlepszyCzas << "\n";
    cout << "Do 10 sekund:\n";
    for (const Zawodnik &zawodnik : zawodnicy)
    {
        if (zawodnik.czas - najlepszyCzas <= 10)
        {
            cout << zawodnik.numer << " " << zawodnik.czas << "\n";
        }
    }
    return 0;
}
```

**Typowe błędy:** odrzucenie wszystkich czasów równych najlepszemu, wybranie zwycięzcy ponownie oraz pominięcie wyniku dokładnie o `10` sekund gorszego.

</details>

## Zadanie 14 - Kontrola magazynu

Magazyn przygotowuje wysyłkę zamówień. Dla każdego produktu znasz kod, stan magazynowy i liczbę zamówionych sztuk. Zapisz dane w `vector` struktur. Zbuduj osobny `vector` produktów, dla których stan jest mniejszy od zapotrzebowania.

Wypisz kod i liczbę brakujących sztuk każdego z tych produktów. Oblicz łączny niedobór. Nadwyżka jednego produktu nie pokrywa braku innego.

[Pobierz stan-magazynu.txt]({{ '/assets/downloads/vector/stan-magazynu.txt' | relative_url }})

### Dane wejściowe

- Liczba produktów `n`, od `0` do `10000`.
- Następnie `n` wierszy: `kod stan potrzebne`.
- Kody są unikalne, mają od `1` do `20` liter alfabetu łacińskiego bez polskich znaków, cyfr lub myślników. Nie zawierają spacji.
- Obie liczby sztuk są całkowite, od `0` do `1000000`.

### Wynik

- `Braki:` i liczba produktów wymagających uzupełnienia.
- Dla każdego takiego produktu wiersz `kod brakujaceSztuki`, w kolejności wejścia.
- `Razem:` i łączna liczba brakujących sztuk.

Przy braku niedoborów nie wypisuj wierszy produktów. Dla pustego magazynu obie liczby w raporcie wynoszą `0`.

### Przykład wejścia

```text
4
SRUBA 8 12
KABEL 5 5
LAMPKA 0 3
PUDLO 20 2
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 14</summary>

```text
Braki: 2
SRUBA 4
LAMPKA 3
Razem: 7
```

Kabla jest dokładnie tyle, ile potrzeba. Nadwyżka pudeł nie zmniejsza braków śrub ani lampek.

</details>

### Kiedy tego użyć?

Do tworzenia listy uzupełnień z pełnej ewidencji. Osobny kontener można później przekazać do innej funkcji.

### Kiedy wybrać coś innego?

Jeśli potrzebujesz wyłącznie łącznej liczby brakujących sztuk, drugi kontener nie jest konieczny. Tutaj lista produktów jest osobnym wynikiem zadania.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 14</summary>

Niedobór jest dodatni tylko wtedy, gdy zamówiono więcej, niż jest w magazynie. Do osobnego kontenera przenieś cały rekord, aby nie stracić powiązania kodu z liczbami. Sprawdź, czy suma wielu dużych braków zmieści się w `int`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 14</summary>

Wektor `doUzupelnienia` przechowuje wybrane rekordy. Sumę zapisujemy jako `long long`, ponieważ może dojść do dziesięciu miliardów sztuk.

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Produkt
{
    string kod;
    int stan;
    int potrzebne;
};

int main()
{
    int liczbaProduktow;
    cin >> liczbaProduktow;
    vector<Produkt> produkty(liczbaProduktow);
    for (int indeks = 0; indeks < liczbaProduktow; indeks++)
    {
        cin >> produkty[indeks].kod >> produkty[indeks].stan
            >> produkty[indeks].potrzebne;
    }

    vector<Produkt> doUzupelnienia;
    long long lacznyBrak = 0;
    for (const Produkt &produkt : produkty)
    {
        if (produkt.stan < produkt.potrzebne)
        {
            doUzupelnienia.push_back(produkt);
            lacznyBrak += produkt.potrzebne - produkt.stan;
        }
    }
    cout << "Braki: " << doUzupelnienia.size() << "\n";
    for (const Produkt &produkt : doUzupelnienia)
    {
        cout << produkt.kod << " " << produkt.potrzebne - produkt.stan << "\n";
    }
    cout << "Razem: " << lacznyBrak << "\n";
    return 0;
}
```

**Typowy błąd:** sumowanie wszystkich różnic razem z ujemnymi sprawia, że nadwyżki jednych towarów odejmują braki innych.

</details>

## Zadanie 15 - Analiza planszy

System zapisuje pomiary na prostokątnej planszy. Zapisz ją w `vector<vector<int>>`. Wskaż wiersz o największej sumie oraz kolumnę o najmniejszej sumie. Policz wszystkie zera. Wypisz wartości na głównej przekątnej od lewego górnego rogu.

Przy remisie wybierz najmniejszy indeks wiersza lub kolumny. Przekątna kończy się, gdy zabraknie wierszy albo kolumn. Plansza nie musi być kwadratowa.

[Pobierz plansza.txt]({{ '/assets/downloads/vector/plansza.txt' | relative_url }})

### Dane wejściowe

- Pierwszy wiersz: liczba wierszy i liczba kolumn, każda od `1` do `100`.
- Następnie tyle wierszy danych, ile podano. W każdym jest dokładnie wskazana liczba kolumn.
- Wartości są całkowite, od `-10000` do `10000`.

### Wynik

- `Wiersz:` oraz indeks wiersza i jego suma.
- `Kolumna:` oraz indeks kolumny i jej suma.
- `Zera:` i liczba wszystkich zer.
- `Przekatna:` i kolejne wartości głównej przekątnej.

### Przykład wejścia

```text
2 3
4 0 -2
1 5 0
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 15</summary>

```text
Wiersz: 1 6
Kolumna: 2 -2
Zera: 2
Przekatna: 4 5
```

Sumy wierszy to `2` i `6`. Sumy kolumn to `5`, `5` i `-2`. Przekątna ma tylko dwa elementy, bo są dwa wiersze.

</details>

### Kiedy tego użyć?

Do analizy tabel, w których osobne znaczenie mają wiersze, kolumny i położenie elementów.

### Kiedy wybrać coś innego?

Jeśli każdy zapis opisuje produkt z nazwanymi polami, wybierz `vector` struktur. Dwa indeksy są wygodne dla danych ułożonych na planszy.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 15</summary>

Utwórz osobne wektory sum wierszy i kolumn, początkowo wypełnione zerami. Każda komórka zasila jedną sumę z obu grup. Przy wyborze największej i najmniejszej sumy zacznij od rzeczywistego wyniku, bo wszystkie sumy mogą być ujemne.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 15</summary>

Po wczytaniu analizujemy każdą komórkę. Dwa osobne przejścia wybierają indeksy na podstawie gotowych sum. Warunek przekątnej pilnuje obu wymiarów naraz.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaWierszy, liczbaKolumn;
    cin >> liczbaWierszy >> liczbaKolumn;
    vector<vector<int>> plansza(liczbaWierszy, vector<int>(liczbaKolumn));
    for (int wiersz = 0; wiersz < liczbaWierszy; wiersz++)
    {
        for (int kolumna = 0; kolumna < liczbaKolumn; kolumna++)
        {
            cin >> plansza[wiersz][kolumna];
        }
    }

    vector<int> sumyWierszy(liczbaWierszy, 0);
    vector<int> sumyKolumn(liczbaKolumn, 0);
    int liczbaZer = 0;
    for (int wiersz = 0; wiersz < liczbaWierszy; wiersz++)
    {
        for (int kolumna = 0; kolumna < liczbaKolumn; kolumna++)
        {
            int wartosc = plansza[wiersz][kolumna];
            sumyWierszy[wiersz] += wartosc;
            sumyKolumn[kolumna] += wartosc;
            if (wartosc == 0)
            {
                liczbaZer++;
            }
        }
    }
    int najlepszyWiersz = 0;
    for (int wiersz = 1; wiersz < liczbaWierszy; wiersz++)
    {
        if (sumyWierszy[wiersz] > sumyWierszy[najlepszyWiersz])
        {
            najlepszyWiersz = wiersz;
        }
    }
    int najmniejszaKolumna = 0;
    for (int kolumna = 1; kolumna < liczbaKolumn; kolumna++)
    {
        if (sumyKolumn[kolumna] < sumyKolumn[najmniejszaKolumna])
        {
            najmniejszaKolumna = kolumna;
        }
    }
    cout << "Wiersz: " << najlepszyWiersz << " " << sumyWierszy[najlepszyWiersz] << "\n";
    cout << "Kolumna: " << najmniejszaKolumna << " " << sumyKolumn[najmniejszaKolumna] << "\n";
    cout << "Zera: " << liczbaZer << "\nPrzekatna: ";
    for (int indeks = 0; indeks < liczbaWierszy && indeks < liczbaKolumn; indeks++)
    {
        cout << plansza[indeks][indeks] << " ";
    }
    cout << "\n";
    return 0;
}
```

**Typowe błędy:** jedna granica dla obu pętli, zerowanie sumy kolumny przy każdym wierszu oraz prowadzenie przekątnej poza krótszy wymiar.

</details>

## Wyniki dla pobranych plików

Po samodzielnym uruchomieniu programu możesz porównać cały raport. Poniższe wyniki dotyczą plików dostępnych na tej stronie, a nie małych przykładów z poleceń.

<details markdown="1">
<summary>Pokaż wynik dla temperatury.txt - zadanie 11</summary>

```text
Minimum: -9
Maksimum: 11
Wzrosty: 53
Bez spadku: 18
```

</details>

<details markdown="1">
<summary>Pokaż wynik dla zuzycie-energii.txt - zadanie 12</summary>

```text
Srednia: 775.76
Ponad srednia: 7 8 16 17 18 19 20 21 31 32 40 41 42 43 44 45 54 55 56 64 65 66 67 68 69 78 79 80 87 88 89 90 91 92 93 102 103 104 111 112 113 114 115 116 117 126 127 128 135 136 137 138 139 140 141 150 151 152 156 159 160 161 162 163 164 165
Pierwsze maksimum: 41
Roznica: 2240
```

</details>

<details markdown="1">
<summary>Pokaż wynik dla wyniki-biegu.txt - zadanie 13</summary>

```text
Zwyciezca: 1002 1530
Drugi: 1048 1530
Roznica: 0
Do 10 sekund:
1057 1535
1002 1530
1048 1530
1031 1540
```

</details>

<details markdown="1">
<summary>Pokaż wynik dla stan-magazynu.txt - zadanie 14</summary>

```text
Braki: 33
PRD-002 19
PRD-003 31
PRD-004 43
PRD-006 47
PRD-007 59
PRD-011 87
PRD-013 1
PRD-014 13
PRD-016 17
PRD-017 29
PRD-018 41
PRD-020 45
PRD-021 57
PRD-022 69
PRD-025 85
PRD-028 11
PRD-029 23
PRD-030 15
PRD-031 27
PRD-032 39
PRD-035 55
PRD-036 67
PRD-039 83
PRD-042 9
PRD-043 21
PRD-044 13
PRD-046 37
PRD-049 53
PRD-050 65
PRD-057 19
PRD-058 11
PRD-059 23
PRD-060 35
Razem: 1249
```

</details>

<details markdown="1">
<summary>Pokaż wynik dla plansza.txt - zadanie 15</summary>

```text
Wiersz: 6 50
Kolumna: 8 -154
Zera: 33
Przekatna: 0 11 7 9 17 -10 10 0 -14 -17 -14 -5
```

</details>

## Praca z debuggerem

W programie magazynu zatrzymaj się przed dodaniem produktu do `doUzupelnienia`. Obserwuj pełny rekord, rozmiar nowego kontenera i `lacznyBrak`. Sprawdź osobno produkt z dokładnym stanem oraz produkt bez ani jednej sztuki.

<details markdown="1">
<summary>Pokaż wskazówkę do pracy z debuggerem</summary>

Porównanie powinno być ścisłe. Zapis z równym stanem i zapotrzebowaniem nie ma niedoboru.

</details>

<details markdown="1">
<summary>Pokaż omówienie pracy z debuggerem</summary>

Dla przykładu z zadania 14 po śrubach rozmiar nowego kontenera to `1`, a suma `4`. Kabel niczego nie zmienia. Lampka podnosi rozmiar do `2`, a sumę do `7`. Pudełko nie trafia na listę. Cały program znajduje się w rozwiązaniu zadania 14.

</details>
