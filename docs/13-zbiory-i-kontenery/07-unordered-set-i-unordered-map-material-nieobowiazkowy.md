---
layout: default
title: unordered_set i unordered_map - materiał nieobowiązkowy
---

# `unordered_set` i `unordered_map` - materiał nieobowiązkowy

> Materiał nieobowiązkowy. Najpierw dobrze opanuj `vector`, `set` i `map`.

## Krótkie wprowadzenie do problemu

Kontenery `unordered` nie gwarantują kolejności, ale przeciętnie szybko wyszukują dane.

## Wyjaśnienie idei prostym językiem

`unordered_set` przypomina `set`, a `unordered_map` przypomina `map`, ale bez uporządkowania. Kolejność elementów może być inna przy innym uruchomieniu lub w innym kompilatorze.

## Składnia

```cpp
#include <unordered_set>
#include <unordered_map>

unordered_set<int> identyfikatory;
unordered_map<string, int> licznik;
```

## Przykład 1 - sprawdzanie identyfikatora

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    unordered_set<int> identyfikatory = {101, 205, 330};

    int liczba;
    cin >> liczba;

    cout << (identyfikatory.count(liczba) ? "Jest.\n" : "Nie ma.\n");
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
205
```

Wynik:

```text
Jest.
```

</details>

## Omówienie przykładu 1

Kolejność identyfikatorów nie jest potrzebna.

## Przykład 2 - liczba różnych kluczy

```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    unordered_map<int, int> licznik;

    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        licznik[liczba]++;
    }

    cout << "Roznych: " << licznik.size() << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
6
4 2 4 7 2 4
```

Wynik:

```text
Roznych: 3
```

</details>

Nie wypisujemy zawartości, bo kolejność nie jest gwarantowana.

## Przykład 3 - wykrywanie duplikatu

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    unordered_set<int> liczby;
    bool znalezionoDuplikat = false;

    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;

        if (liczby.count(liczba))
        {
            znalezionoDuplikat = true;
        }
        else
        {
            liczby.insert(liczba);
        }
    }

    cout << (znalezionoDuplikat ? "Duplikat.\n" : "Brak duplikatu.\n");
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
5
8 3 4 8 9
```

Wynik:

```text
Duplikat.
```

</details>

## Kiedy tego użyć?

Gdy kolejność nie ma znaczenia i wykonujesz bardzo wiele wyszukiwań. Przeciętnie jest szybko, ale najgorszy przypadek może być `O(n)`.

## Kiedy wystarczy vector?

Dla małych danych zwykle wystarczy `vector` i pętla.

## Kiedy wybrać coś innego?

Gdy potrzebny jest porządek, wybierz `set` albo `map`. Gdy potrzebujesz indeksów, wybierz `vector`.

## Ćwiczenia

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Co wolno przewidzieć?

Dla `unordered_set<int> numery = {8, 2, 8, 5};` uczeń oczekuje po pętli wypisującej elementy dokładnie `2 5 8`. Oceń to oczekiwanie. Podaj gwarantowany rozmiar, gwarantowaną zawartość i zasady poprawnego testu wyniku. Nie wybieraj jednej kolejności wypisywania.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Nazwa kontenera mówi, której własności nie obiecuje. Unikalność nadal obowiązuje.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Rozmiar wynosi 3, a elementy to 2, 5 i 8, każdy raz. Kolejność nie jest gwarantowana. Test powinien sprawdzić obecność tych trzech wartości, brak dodatkowych wartości i brak powtórzeń, bez porównywania kolejności.

</details>

### Ćwiczenie 2. Wiele pytań o obecność

Uprawnione identyfikatory to `{101, 205, 330}`. Wczytaj liczbę pytań `q` (`0–100`), a potem `q` identyfikatorów. Dla każdego wypisz `TAK` albo `NIE`, zachowując kolejność pytań. Użyj `unordered_set`. Wyjaśnij, dlaczego brak porządku wewnątrz kontenera nie zmienia kolejności odpowiedzi. Jak zmieniłby się wybór przy jednym pytaniu o trzy elementy?

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Odpowiadasz podczas czytania pytań, a nie podczas przechodzenia po zbiorze.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Kolejność odpowiedzi ustala pętla po pytaniach. Zbiór służy tylko do sprawdzania obecności. Przy jednym pytaniu i trzech elementach wystarczyłby `vector` oraz zwykła pętla.

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    unordered_set<int> uprawnieni = {101, 205, 330};
    int liczbaPytan;
    cin >> liczbaPytan;
    for (int indeks = 0; indeks < liczbaPytan; indeks++)
    {
        int numer;
        cin >> numer;
        cout << (uprawnieni.count(numer) ? "TAK\n" : "NIE\n");
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:

```text
3
205 999 101
```

Wynik:

```text
TAK
NIE
TAK
```

Dane wejściowe:

```text
1
0
```

Wynik:

```text
NIE
```

</details>

### Ćwiczenie 3. Raport miał być alfabetyczny

Program wypisuje pary z `unordered_map<string, int> licznik`, ale specyfikacja wymaga słów w kolejności alfabetycznej. Wyjaśnij błąd doboru kontenera i napisz kompletny program z właściwym kontenerem. Wczytaj `n` (`0–100`) i `n` słów z małych liter `a–z`. Wypisz każde słowo i jego częstość jako `słowo => licznik`. Dla `n = 0` wypisz `Brak słów.`. Nie sortuj osobnej listy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

W tym zadaniu uporządkowany wynik jest wymaganiem, więc wybór kontenera powinien je uwzględniać.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Zamieniamy `unordered_map` na `map`. Mapa uporządkowana pozwala wypisać klucze alfabetycznie; kontener nieuporządkowany takiej kolejności nie gwarantuje.

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    int liczbaSlow;
    cin >> liczbaSlow;
    map<string, int> licznik;
    for (int indeks = 0; indeks < liczbaSlow; indeks++)
    {
        string slowo;
        cin >> slowo;
        licznik[slowo]++;
    }
    if (licznik.empty()) cout << "Brak słów.\n";
    for (const auto &wpis : licznik)
    {
        cout << wpis.first << " => " << wpis.second << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Dane wejściowe:

```text
4
kot ala kot dom
```

Wynik:

```text
ala => 1
dom => 1
kot => 2
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak słów.
```

</details>

### Ćwiczenie 4. Licznik na żądanie — ćwiczenie trudniejsze

Wczytaj `n` (`0–100`) i `n` słów bez spacji, potem liczbę zapytań `q` (`0–100`) i `q` słów. Dla każdego pytania wypisz liczbę wystąpień danego słowa. Wielkość liter ma znaczenie. Użyj `unordered_map`, bo nie potrzebujesz uporządkowanego raportu. Nie dodawaj brakujących słów podczas pytań. Na końcu wypisz `Różnych: ` i liczbę różnych słów w danych początkowych.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Oddziel etap tworzenia liczników od etapu odczytu. Brak klucza w pytaniu oznacza wynik zero, ale nie nowy wpis.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

int main()
{
    int liczbaSlow;
    cin >> liczbaSlow;
    unordered_map<string, int> licznik;
    for (int indeks = 0; indeks < liczbaSlow; indeks++)
    {
        string slowo;
        cin >> slowo;
        licznik[slowo]++;
    }
    int liczbaPytan;
    cin >> liczbaPytan;
    for (int indeks = 0; indeks < liczbaPytan; indeks++)
    {
        string slowo;
        cin >> slowo;
        if (licznik.count(slowo)) cout << licznik[slowo] << "\n";
        else cout << "0\n";
    }
    cout << "Różnych: " << licznik.size() << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 4</summary>

Dane wejściowe:

```text
3
kot pies kot
3
kot ptak pies
```

Wynik:

```text
2
0
1
Różnych: 2
```

Dane wejściowe:

```text
0
2
kot Kot
```

Wynik:

```text
0
0
Różnych: 0
```

</details>

## Typowe błędy

- Oczekiwanie uporządkowanej kolejności.
- Podawanie konkretnej kolejności jako gwarantowanej.
- Używanie `unordered` tam, gdzie prostszy jest `vector`.

## Podsumowanie

Kontenery `unordered` są dodatkiem do wielu wyszukiwań bez potrzeby porządku.
