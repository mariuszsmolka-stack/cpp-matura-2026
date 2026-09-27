---
layout: default
title: map - klucz i wartość
---

# `map` - klucz i wartość

## Krótkie wprowadzenie do problemu

`map` przydaje się, gdy dane wyszukujemy po nazwie, kodzie albo identyfikatorze.

## Wyjaśnienie idei prostym językiem

`map` przechowuje pary klucz => wartość. Klucze są unikalne i uporządkowane.

## Składnia

```cpp
#include <map>

map<string, int> punkty;
punkty["Adam"] = 15;
punkty.find("Adam");
punkty.count("Adam");
punkty.erase("Adam");
```

```cpp
for (const auto &element : punkty)
{
    cout << element.first << " => " << element.second << '\n';
}
```

`auto` rozpoznaje typ. `first` to klucz, `second` to wartość, `const &` chroni element i unika kopii.

## Pułapka `mapa[klucz]`

Jeżeli klucza nie ma, `mapa[klucz]` tworzy nowy element z wartością domyślną. Do sprawdzania używaj `find()` albo `count()`.

## Przykład 1 - produkt => cena

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    map<string, double> ceny;
    ceny["zeszyt"] = 4.5;
    ceny["dlugopis"] = 3.2;
    string p;
    cin >> p;
    if (ceny.find(p) != ceny.end())
    {
        cout << ceny[p] << "\n";
    }
    else
    {
        cout << "Brak.\n";
    }
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
dlugopis
```

Wynik:

```text
3.2
```

</details>

## Omówienie przykładu 1

Program sprawdza klucz przez `find()`, a potem odczytuje wartość.

## Przykład 2 - identyfikator => punkty

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    map<int, int> p;
    p[101] = 35;
    p[205] = 42;
    p[205] = 45;
    p.erase(101);
    for (const auto &e : p)
    {
        cout << e.first << " => " << e.second << "\n";
    }
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
205 => 45
```

</details>

## Przykład 3 - miasto => temperatura

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    map<string, double> t;
    for (int i = 0; i < liczbaElementow; i++)
    {
        string m;
        double x;
        cin >> m >> x;
        t[m] = x;
    }
    for (const auto &e : t)
    {
        cout << e.first << " => " << e.second << "\n";
    }
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
3
Krakow 21.5
Gdansk 18
Lodz 20
```

Wynik:

```text
Gdansk => 18
Krakow => 21.5
Lodz => 20
```

</details>

## Kiedy tego użyć?

Gdy masz unikalny klucz i często szukasz przypisanej wartości.

## Kiedy wystarczy vector?

Dla kilku produktów można użyć `vector<Produkt>` i pętli. `map` jest wygodniejsza przy wielu wyszukiwaniach.

## Kiedy wybrać coś innego?

Dla samych unikalnych wartości wystarczy `set`.

## Ćwiczenia

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Nowy klucz czy nowa wartość?

Prześledź kolejne stany mapy i podaj końcowy rozmiar. Czy drugie przypisanie do klucza `101` dodaje drugą parę?

```cpp
map<int, int> punkty;
punkty[101] = 8;
punkty[205] = 8;
punkty[101] = 12;
punkty.erase(999);
```

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Klucz i przypisana mu wartość pełnią różne role. Unikalność dotyczy tylko jednej z nich.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Stany: `{101 => 8}`, `{101 => 8, 205 => 8}`, `{101 => 12, 205 => 8}`, bez zmian po `erase(999)`. Rozmiar: 2. Istniejący klucz ma aktualizowaną wartość. Różne klucze mogą mieć tę samą wartość.

</details>

### Ćwiczenie 2. Bezpieczny odczyt cennika

Utwórz cennik `zeszyt => 5`, `olowek => 2` (ceny w złotych). Wczytaj nazwę produktu bez spacji. Wypisz cenę albo `Brak produktu.`. Wyszukiwanie nie może dodawać nowych wpisów. W drugim wierszu wypisz rozmiar cennika.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Przed odczytem wartości sprawdź klucz metodą, która nie zmienia mapy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    map<string, int> ceny;
    ceny["zeszyt"] = 5;
    ceny["olowek"] = 2;
    string produkt;
    cin >> produkt;
    if (ceny.count(produkt))
    {
        cout << ceny[produkt] << "\n";
    }
    else
    {
        cout << "Brak produktu.\n";
    }
    cout << ceny.size() << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:

```text
zeszyt
```

Wynik:

```text
5
2
```

Dane wejściowe:

```text
gumka
```

Wynik:

```text
Brak produktu.
2
```

</details>

### Ćwiczenie 3. Zero nie oznacza braku klucza

W mapie punktów jest wpis `101 => 0`. Błędny fragment sprawdza obecność tak:

```cpp
if (punkty[numer] != 0)
{
    cout << "Jest.\n";
}
else
{
    cout << "Brak.\n";
}
```

Wyjaśnij dwa problemy: dla numeru 101 i dla nieobecnego 999. Napisz poprawny program: wczytaj numer, wypisz `Jest.` albo `Brak.`, a potem rozmiar mapy. Sprawdzenie nie może jej zmieniać.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Wartość zero może być poprawnym wynikiem. Sprawdź również, co robi `[]`, kiedy klucza jeszcze nie ma.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Dla 101 program myli zero punktów z brakiem osoby. Dla 999 tworzy nowy wpis z zerem. `count()` sprawdza obecność niezależnie od liczby punktów.

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    map<int, int> punkty;
    punkty[101] = 0;
    int numer;
    cin >> numer;
    if (punkty.count(numer))
    {
        cout << "Jest.\n";
    }
    else
    {
        cout << "Brak.\n";
    }
    cout << punkty.size() << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Dane wejściowe:

```text
101
```

Wynik:

```text
Jest.
1
```

Dane wejściowe:

```text
999
```

Wynik:

```text
Brak.
1
```

</details>

### Ćwiczenie 4. Korekta istniejącego wyniku

Mapa zawiera `101 => 8`, `205 => 12`. Wczytaj numer ucznia i nową liczbę punktów (`0–100`). Jeżeli liczba punktów jest poza zakresem, wypisz `Niepoprawne punkty.`. W przeciwnym razie zaktualizuj wyłącznie istniejący wpis i wypisz nową wartość albo `Brak ucznia.`. Nie dopisuj nieznanych uczniów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Oddziel poprawność nowej wartości od obecności klucza. Dopiero po obu sprawdzeniach wykonaj zapis.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    map<int, int> punkty;
    punkty[101] = 8;
    punkty[205] = 12;
    int numer, nowePunkty;
    cin >> numer >> nowePunkty;
    if (nowePunkty < 0 || nowePunkty > 100)
    {
        cout << "Niepoprawne punkty.\n";
    }
    else if (!punkty.count(numer))
    {
        cout << "Brak ucznia.\n";
    }
    else
    {
        punkty[numer] = nowePunkty;
        cout << punkty[numer] << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 4</summary>

Dane wejściowe:

```text
101 15
```

Wynik:

```text
15
```

Dane wejściowe:

```text
999 15
```

Wynik:

```text
Brak ucznia.
```

Dane wejściowe:

```text
101 -1
```

Wynik:

```text
Niepoprawne punkty.
```

</details>

### Ćwiczenie 5. Co sprawdzić po usunięciu?

Dla mapy `{101 => 8, 205 => 12}` przygotuj dwa testy operacji `erase(numer)`: usunięcie istniejącego i nieistniejącego klucza. W każdym podaj numer, końcową zawartość i rozmiar. Następnie opisz test usunięcia ostatniego wpisu. Nie pisz programu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Test powinien wykrywać zarówno usunięcie właściwego wpisu, jak i przypadkową zmianę pozostałych.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Każdy z pierwszych testów zaczyna od mapy podanej w poleceniu. Numer 101 => `{205 => 12}`, rozmiar 1. Numer 999 => `{101 => 8, 205 => 12}`, rozmiar 2. Dla mapy jednoelementowej `{205 => 12}` usunięcie 205 daje pustą mapę, rozmiar 0 i `empty() == true`.

</details>

### Ćwiczenie 6. Ostatni odczyt czujnika — ćwiczenie trudniejsze

Wczytaj liczbę odczytów `n` (`0–100`), potem `n` par: numer czujnika i temperatura całkowita. Nowszy odczyt zastępuje poprzedni dla tego samego czujnika. Na końcu wczytaj numer szukanego czujnika i wypisz jego ostatnią temperaturę albo `Brak odczytu.`. Dobierz kontener i porównaj go z `set` oraz listą wszystkich odczytów w `vector`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Potrzebujesz powiązania numeru z jedną, aktualną wartością. Powtórny numer ma zmienić wartość.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

Wybieramy `map<int, int>`. Sam `set<int>` pamiętałby tylko numery. `vector` z historią wymagałby wyszukania ostatniego odczytu; jest przydatny, jeśli historia też ma być zachowana.

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    int liczbaOdczytow;
    cin >> liczbaOdczytow;
    map<int, int> temperatury;
    for (int indeks = 0; indeks < liczbaOdczytow; indeks++)
    {
        int numer, temperatura;
        cin >> numer >> temperatura;
        temperatury[numer] = temperatura;
    }
    int szukanyNumer;
    cin >> szukanyNumer;
    if (temperatury.count(szukanyNumer))
    {
        cout << temperatury[szukanyNumer] << "\n";
    }
    else
    {
        cout << "Brak odczytu.\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 6</summary>

Dane wejściowe:

```text
3
7 12
2 8
7 15
7
```

Wynik:

```text
15
```

Dane wejściowe:

```text
0
7
```

Wynik:

```text
Brak odczytu.
```

Dane wejściowe:

```text
1
7 0
7
```

Wynik:

```text
0
```

</details>

## Typowe błędy

- Przypadkowe tworzenie klucza przez `mapa[klucz]`.
- Mylenie `first` i `second`.
- Oczekiwanie kolejności dodawania.

## Podsumowanie

`map` opisuje zależność klucz => wartość.
