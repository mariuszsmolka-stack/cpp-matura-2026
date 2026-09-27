---
layout: default
title: Jak wybrać kontener?
---

# Jak wybrać kontener?

## Krótkie wprowadzenie do problemu

Ten sam problem da się rozwiązać na kilka sposobów. Dobre rozwiązanie jest poprawne, proste i wystarczająco wygodne.

## Wyjaśnienie idei prostym językiem

Zaczynaj od `vector`. `set` wybieraj dla unikalności. `map` wybieraj dla relacji klucz => wartość.

## Tabela porównawcza

| Potrzeba                                        | Kontener                           |
| ----------------------------------------------- | ---------------------------------- |
| Zachowanie kolejności wprowadzania              | `vector`                           |
| Dostęp przez indeks                             | `vector`                           |
| Zachowanie powtórzeń                            | `vector`                           |
| Przechowywanie każdej wartości najwyżej raz       | `set`                              |
| Automatyczne uporządkowanie unikalnych wartości | `set`                              |
| Wyszukiwanie przez klucz                        | `map`                              |
| Zliczanie wystąpień                             | `map`                              |
| Kilka wartości przypisanych do klucza           | `map<klucz, vector<wartosc>>`      |
| Uporządkowane wartości z powtórzeniami          | `multiset` - opcjonalnie           |
| Szybkie przeciętne wyszukiwanie bez kolejności  | kontener `unordered` - opcjonalnie |

## Koszt operacji w skrócie

`vector` szuka zwykle w `O(n)`, `set` i `map` w `O(log n)`, a kontenery `unordered` przeciętnie w `O(1)`, ale w najgorszym przypadku w `O(n)`.

## Przykład 1 - `vector` zachowuje powtórzenia

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> oceny = {5, 4, 5, 3};

    for (int liczba : oceny)
    {
        cout << liczba << " ";
    }

    cout << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
5 4 5 3
```

</details>

## Omówienie przykładu 1

`vector` jest dobry, bo kolejność i powtórzenia są ważne.

## Przykład 2 - `set` przechowuje wartości bez powtórzeń

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> liczby = {12, 7, 12, 3, 7};

    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }

    cout << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
3 7 12
```

</details>

## Przykład 3 - `map` wyszukuje po kluczu

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

    string produkt;
    cin >> produkt;

    if (ceny.find(produkt) != ceny.end())
    {
        cout << ceny[produkt] << "\n";
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
zeszyt
```

Wynik:

```text
4.5
```

</details>

## Kiedy tego użyć?

Gdy masz zdecydować, czy ważniejszy jest indeks, kolejność, powtórzenia, unikalność czy klucz.

## Kiedy wystarczy vector?

Dla małych danych, jednego wyszukiwania albo potrzeby zachowania kolejności. Przykład: pięć pomiarów temperatury.

## Kiedy wybrać coś innego?

`set` dla unikalności, `map` dla klucza. `multiset` i `unordered` są dodatkami.

## Ćwiczenia

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Jakie informacje znikną?

Pomiary to `5, 2, 5`. Trzeba później odczytać drugi pomiar i policzyć średnią wszystkich trzech. Uczeń zapisał je tylko w `set<int>`. Podaj zawartość zbioru, wskaż utracone informacje i wybierz lepszy kontener. Porównaj jego właściwości z `set`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Sprawdź osobno kolejność, powtórzenia i dostęp przez indeks.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Zbiór zawiera `{2, 5}`. Traci kolejność i drugie wystąpienie 5, więc średnia dwóch elementów zbioru byłaby błędna. `vector<int>` zachowa `{5, 2, 5}`, daje indeks 1 dla drugiego pomiaru i pozwala obliczyć średnią 4. `set` jest właściwy, gdy potrzebujemy wyłącznie różnych wartości.

</details>

### Ćwiczenie 2. Jedno wyszukiwanie w małej liście

Lista ma najwyżej osiem elementów i będzie przeszukana tylko raz. Napisz program: wczytaj `n` (`0–8`), `n` liczb i szukaną liczbę. Wypisz `Jest.` albo `Brak.`. Wybierz `vector` albo `set` i uzasadnij wybór. Nie buduj drugiego kontenera.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Koszt przygotowania dodatkowej struktury może nie mieć sensu dla kilku elementów i jednego pytania.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Wystarczy `vector` oraz jedna pętla. `set` również pozwoliłby znaleźć wartość, ale nie daje tu potrzebnej korzyści, a zmienia sposób przechowywania danych.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> liczby(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++) cin >> liczby[indeks];
    int szukana;
    cin >> szukana;
    bool znaleziono = false;
    for (int liczba : liczby)
    {
        if (liczba == szukana) znaleziono = true;
    }
    cout << (znaleziono ? "Jest.\n" : "Brak.\n");
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:

```text
4
8 2 8 5
2
```

Wynik:

```text
Jest.
```

Dane wejściowe:

```text
0
2
```

Wynik:

```text
Brak.
```

</details>

### Ćwiczenie 3. Napraw dobór kontenera

Program miał wypisać różne numery rosnąco, ale zachowuje powtórzenia:

```cpp
vector<int> numery = {9, 3, 9, 1};
for (int numer : numery) cout << numer << " ";
```

Wskaż dwie wymagane właściwości wyniku. Napisz kompletny poprawiony program z właściwym kontenerem. Porównaj go z dotychczasowym `vector`; nie używaj sortowania.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Potrzebny kontener ma jednocześnie pilnować unikalności i porządku.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Wybieramy `set<int>`. `vector` zachowuje kolejność i powtórzenia, więc wymagałby dodatkowego przetwarzania, którego tutaj nie potrzebujemy.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> numery = {9, 3, 9, 1};
    for (int numer : numery) cout << numer << " ";
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Program nie pobiera danych. Wynik:

```text
1 3 9
```

</details>

### Ćwiczenie 4. Ta sama dziedzina, inne wymagania

Dobierz kontener do trzech osobnych potrzeb: historia cen jednego produktu w kolejności zmian; aktualna cena wyszukiwana po kodzie produktu; różne kody produktów rosnąco. Dla każdej potrzeby wymień ważne właściwości danych i odrzuć jedną alternatywę z uzasadnieniem. Nie pisz programu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Sama nazwa „produkt” nie rozstrzyga wyboru. Ustal, czy potrzebujesz historii, par klucz => wartość czy unikalności.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Historia => `vector`, bo zachowuje kolejność i powtórzenia; `set` je utraci. Cennik => `map`, bo kodowi przypisuje cenę; sam `set` kodów nie zapisze cen. Różne kody rosnąco => `set`; `vector` wymaga dodatkowego sprawdzania powtórzeń i porządkowania.

</details>

### Ćwiczenie 5. Rejestr wyników — ćwiczenie trudniejsze

Wczytaj `n` (`0–100`) par: imię bez spacji i wynik (`0–100`). Na końcu wczytaj imię. Wypisz wszystkie wyniki tej osoby w kolejności wpisania albo `Brak osoby.`. Wybierz kontener, uzasadnij typ jego wartości i porównaj rozwiązanie z mapą zawierającą tylko ostatni wynik. Wyszukiwanie nie może dopisać brakującej osoby.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Klucz identyfikuje osobę, a przypisana wartość musi zachować całą historię. Sprawdź obecność przed odczytem.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Używamy `map<string, vector<int>>`. Mapa z samym `int` zachowałaby tylko jeden wynik. `vector` wewnątrz mapy zachowuje kolejność i powtórzenia.

```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

int main()
{
    int liczbaWynikow;
    cin >> liczbaWynikow;
    map<string, vector<int>> wyniki;
    for (int indeks = 0; indeks < liczbaWynikow; indeks++)
    {
        string imie;
        int wynik;
        cin >> imie >> wynik;
        wyniki[imie].push_back(wynik);
    }
    string szukanaOsoba;
    cin >> szukanaOsoba;
    if (!wyniki.count(szukanaOsoba))
    {
        cout << "Brak osoby.\n";
    }
    else
    {
        for (int wynik : wyniki[szukanaOsoba]) cout << wynik << " ";
        cout << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 5</summary>

Dane wejściowe:

```text
3
Jan 5
Anna 3
Jan 5
Jan
```

Wynik:

```text
5 5
```

Dane wejściowe:

```text
0
Jan
```

Wynik:

```text
Brak osoby.
```

</details>

## Typowe błędy

- Wybieranie zbyt trudnego kontenera.
- Używanie `set`, gdy powtórzenia są potrzebne.
- Używanie `map`, gdy nie ma klucza.

## Podsumowanie

Kontener ma pasować do problemu. Najpierw prosty `vector`, potem dopiero `set` albo `map`.
