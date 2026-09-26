# Pierwszy `vector`

## Krótkie wprowadzenie do problemu

Tablica ma stały rozmiar. Jeżeli nie wiesz, ile elementów będzie potrzebnych, wygodniejszy jest `vector`.

## Proste wyjaśnienie idei

`vector` przechowuje elementy tego samego typu. Elementy mają indeksy od `0`, tak jak w tablicy. Różnica jest taka, że `vector` potrafi zmieniać rozmiar.

## Składnia

```cpp
#include <vector>

vector<int> liczby;
vector<int> punkty = {12, 18, 9, 20};
vector<int> wyniki(5);
vector<int> zera(5, 0);
```

`vector<int>` oznacza: kontener przechowujący liczby całkowite.

## Przykład 1 - wyniki ucznia

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> punkty = {12, 18, 9, 20};

    cout << "Liczba wynikow: " << punkty.size() << "\n";
    cout << "Pierwszy wynik: " << punkty[0] << "\n";
    cout << "Ostatni wynik: " << punkty[punkty.size() - 1] << "\n";

    punkty[2] = 15;

    cout << "Po poprawie: " << punkty[2] << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Liczba wynikow: 4
Pierwszy wynik: 12
Ostatni wynik: 20
Po poprawie: 15
```

</details>

## Omówienie programu krok po kroku

1. `#include <vector>` pozwala używać `vector`.
2. `vector<int> punkty = {12, 18, 9, 20};` tworzy cztery wyniki.
3. `size()` zwraca liczbę elementów.
4. `punkty[0]` oznacza pierwszy element.
5. `punkty[punkty.size() - 1]` oznacza ostatni element.
6. `punkty[2] = 15;` zmienia trzeci element.

## Przykład 2 - rozmiar podany przez użytkownika

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int n;
    cin >> n;

    if (n < 0)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    vector<int> pomiary(n, 0);

    cout << "Utworzono elementow: " << pomiary.size() << "\n";

    if (!pomiary.empty())
    {
        pomiary[0] = 10;
        cout << "Pierwszy pomiar: " << pomiary.at(0) << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
3
```

Wynik:

```text
Utworzono elementow: 3
Pierwszy pomiar: 10
```

</details>

`at()` sprawdza zakres dokładniej niż `[]`. Nadal najlepiej samodzielnie pilnować poprawnych indeksów.

## Kiedy tego użyć?

Użyj `vector`, gdy liczba elementów może zależeć od użytkownika albo może zmieniać się podczas programu.

## Kiedy wybrać coś innego?

Jeżeli rozmiar jest mały, stały i znany wcześniej, zwykła tablica może wystarczyć. Jeśli potrzebujesz ręcznie zarządzać pamięcią, istnieje tablica dynamiczna, ale to materiał dodatkowy.

## Typowe błędy

- Brak `#include <vector>`.
- Mylenie pierwszego indeksu z `1` zamiast `0`.
- Odczyt ostatniego elementu przez `punkty[punkty.size()]`.
- Odczyt elementu z pustego `vector`.
- Zakładanie, że `at()` służy do dodawania nowych elementów.

## Ćwiczenia

### Ćwiczenie 1

Utwórz `vector` z pięcioma liczbami i wypisz wszystkie elementy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Utwórz `vector<int> liczby = {...};` i wypisz elementy przez indeksy od `0` do `4`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {4, 8, 2, 9, 7};

    for (int i = 0; i < (int)liczby.size(); i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 2

Utwórz `vector` z ocenami i wypisz pierwszy oraz ostatni element.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Ostatni indeks to `(int)oceny.size() - 1`. Najpierw sprawdź, czy `vector` nie jest pusty.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> oceny = {5, 4, 3, 5};

    if (!oceny.empty())
    {
        cout << "Pierwsza: " << oceny[0] << "\n";
        cout << "Ostatnia: " << oceny[oceny.size() - 1] << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 3

Wczytaj indeks i nową wartość. Jeżeli indeks jest poprawny, zmień element w `vector`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Poprawny indeks spełnia warunek `indeks >= 0 && indeks < (int)liczby.size()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {10, 20, 30, 40};
    int indeks, nowaWartosc;

    cin >> indeks >> nowaWartosc;

    if (indeks >= 0 && indeks < (int)liczby.size())
    {
        liczby[indeks] = nowaWartosc;
    }

    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 4

Wczytaj rozmiar `n`, utwórz `vector<int>` o takim rozmiarze i ustaw wszystkie elementy na `1`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Użyj konstruktora `vector<int> liczby(n, 1);`. Sprawdź, czy `n` nie jest ujemne.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int n;
    cin >> n;

    if (n < 0)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    vector<int> liczby(n, 1);

    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 5

Utwórz pusty `vector`. Sprawdź, czy jest pusty, zanim spróbujesz wypisać pierwszy element.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Użyj `empty()`. Jeżeli `vector` jest pusty, wypisz komunikat.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby;

    if (liczby.empty())
    {
        cout << "Brak elementow.\n";
    }
    else
    {
        cout << liczby[0] << "\n";
    }

    return 0;
}
```

</details>

## Podsumowanie

`vector` jest standardowym sposobem przechowywania wielu elementów, gdy rozmiar nie musi być stały. Indeksy działają podobnie jak w tablicach, ale `vector` ma dodatkowe metody, takie jak `size()` i `empty()`.
