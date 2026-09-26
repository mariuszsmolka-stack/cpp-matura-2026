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
| Automatyczne usuwanie powtórzeń                 | `set`                              |
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

## Przykład 2 - `set` usuwa powtórzenia

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

### Ćwiczenie 1

Lista ocen ma zachować kolejność i powtórzenia. Wybierz kontener.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Wybierz `vector`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Wybrano `vector`, bo powtórzenia są ważne.

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

</details>
### Ćwiczenie 2

Numery startowe mają być unikalne i rosnące. Wybierz kontener.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Wybierz `set`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Wybrano `set`, bo usuwa duplikaty.

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

</details>
### Ćwiczenie 3

Cennik ma wyszukiwać po kodzie. Wybierz kontener.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Wybierz `map`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Wybrano `map`, bo kod jest kluczem.

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

</details>
### Ćwiczenie 4

Policz wystąpienia słów. Wybierz kontener.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Wybierz `map<string,int>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Wybrano mapę, bo słowo jest kluczem licznika.

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    map<string, int> licznikSlow;

    for (int i = 0; i < liczbaElementow; i++)
    {
        string slowo;
        cin >> slowo;
        licznikSlow[slowo]++;
    }

    for (const auto &element : licznikSlow)
    {
        cout << element.first << " => " << element.second << "\n";
    }

    return 0;
}
```

</details>
### Ćwiczenie 5

Policz średnią pięciu pomiarów. Wybierz najprostszy kontener.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Wybierz `vector<double>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Wybrano `vector`, bo to zwykła lista wartości.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<double> pomiary = {20.5, 21, 19.5, 22, 20};
    double suma = 0;

    for (double pomiar : pomiary)
    {
        suma += pomiar;
    }

    cout << suma / pomiary.size() << "\n";
    return 0;
}
```

</details>

## Typowe błędy

- Wybieranie zbyt trudnego kontenera.
- Używanie `set`, gdy powtórzenia są potrzebne.
- Używanie `map`, gdy nie ma klucza.

## Podsumowanie

Kontener ma pasować do problemu. Najpierw prosty `vector`, potem dopiero `set` albo `map`.
