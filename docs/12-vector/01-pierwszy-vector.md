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

`at()` sprawdza zakres i zgłasza błąd `out_of_range`, gdy indeks jest niepoprawny. Operator `[]` nie wykonuje takiej kontroli. `at()` sprawdza, czy wskazany element istnieje. `[]` zakłada, że programista podał prawidłowy indeks. Użycie `[]` z niepoprawnym indeksem prowadzi do niezdefiniowanego działania programu. `at()` nie dodaje elementów i nie powiększa `vector`. Dla niepustego kontenera poprawne indeksy należą do zakresu od `0` do `size() - 1`. Pusty kontener nie ma żadnego poprawnego indeksu. `at()` jest przydatne podczas nauki i sprawdzania poprawności indeksu.

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

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Indeks a liczba elementów

Dla `vector<int> liczby = {8, 3, 8};` podaj rozmiar oraz pierwszy i ostatni poprawny indeks. Następnie prześledź fragment:

```cpp
liczby[1] = liczby[0] + 1;
cout << liczby[1] << " " << liczby.at(2) << "\n";
```

Podaj wynik i końcową zawartość kontenera. Czy zmienił się jego rozmiar?

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Numerujesz miejsca od zera. Przypisanie zmienia wartość w istniejącym miejscu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Rozmiar: 3, indeksy od 0 do 2. Po przypisaniu zawartość to `{8, 9, 8}`. Wynik: `9 8`. Rozmiar nadal wynosi 3.

</details>

### Ćwiczenie 2. Pierwszy i ostatni pomiar

Utwórz `vector<int> pomiary = {12, 15, 11};`. Napisz program wypisujący pierwszy i ostatni element w jednym wierszu. Jeśli kontener jest pusty, wypisz `Brak pomiarów.`. Sprawdź program także po zastąpieniu inicjalizacji przez `{}` oraz `{7}`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Przed obliczeniem ostatniego indeksu sprawdź, czy istnieje choć jeden element.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Dla `{}` wynik to `Brak pomiarów.`, a dla `{7}` wynik to `7 7`. Jedyny element jest jednocześnie pierwszy i ostatni.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> pomiary = {12, 15, 11};
    if (pomiary.empty())
    {
        cout << "Brak pomiarów.\n";
    }
    else
    {
        cout << pomiary[0] << " " << pomiary[pomiary.size() - 1] << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Program nie pobiera danych. Wynik:

```text
12 11
```

</details>

### Ćwiczenie 3. Dlaczego size() nie jest indeksem?

Znajdź i wyjaśnij błąd:

```cpp
vector<int> liczby = {4, 9};
cout << liczby[liczby.size()] << "\n";
```

Nie uruchamiaj błędnego fragmentu. Napisz kompletny program bezpiecznie wypisujący ostatni element albo `Brak elementów.`. Wyjaśnij, co zmieniłoby samo zastąpienie `[]` przez `at()`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Porównaj liczbę elementów z największym poprawnym indeksem. Osobno rozważ pusty kontener.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Indeks 2 jest poza zakresem 0–1. Błędny odczyt przez `[]` ma niezdefiniowane działanie. `at(liczby.size())` zgłosiłoby `out_of_range`; nie naprawiłoby indeksu ani nie dodałoby elementu.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {4, 9};
    if (liczby.empty())
    {
        cout << "Brak elementów.\n";
    }
    else
    {
        cout << liczby.at(liczby.size() - 1) << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Program nie pobiera danych. Wynik:

```text
9
```

</details>

### Ćwiczenie 4. Korekta wyniku

Wyniki czterech prób zapisano jako `{10, 20, 30, 40}`. Wczytaj indeks oraz nową wartość całkowitą. Zmień wskazany element tylko dla poprawnego indeksu i wypisz cały kontener. Dla błędnego indeksu wypisz wyłącznie `Niepoprawny indeks.`. Przygotuj test dla ostatniego elementu i dla indeksu tuż za końcem.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Ustal obie granice indeksu przed zapisem do kontenera.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> wyniki = {10, 20, 30, 40};
    int indeks, nowaWartosc;
    cin >> indeks >> nowaWartosc;
    if (indeks < 0 || indeks >= (int)wyniki.size())
    {
        cout << "Niepoprawny indeks.\n";
        return 0;
    }
    wyniki[indeks] = nowaWartosc;
    for (int wynik : wyniki)
    {
        cout << wynik << " ";
    }
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 4</summary>

Dane wejściowe:

```text
3 50
```

Wynik:

```text
10 20 30 50
```

Dane wejściowe:

```text
4 50
```

Wynik:

```text
Niepoprawny indeks.
```

Dane wejściowe:

```text
-1 8
```

Wynik:

```text
Niepoprawny indeks.
```

</details>

### Ćwiczenie 5. Rezerwacja miejsc na pomiary — ćwiczenie trudniejsze

Wczytaj liczbę pomiarów z zakresu `0–100`. Dla innej liczby wypisz `Niepoprawny rozmiar.` i zakończ program. Utwórz `vector<int>` o podanym rozmiarze, wczytaj pomiary i wypisz ich sumę. Dla zera wypisz `Brak pomiarów.`. Wyjaśnij, dlaczego tablica o stałym rozmiarze byłaby tu mniej wygodna.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Najpierw sprawdź rozmiar, potem utwórz kontener. Suma przed pierwszym pomiarem wynosi zero.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Rozmiar `vector` można ustalić na podstawie wczytanej wartości. Zwykła tablica wymagałaby stałej pojemności i osobnego pilnowania liczby użytych miejsc.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaPomiarow;
    cin >> liczbaPomiarow;
    if (liczbaPomiarow < 0 || liczbaPomiarow > 100)
    {
        cout << "Niepoprawny rozmiar.\n";
        return 0;
    }
    vector<int> pomiary(liczbaPomiarow);
    if (pomiary.empty())
    {
        cout << "Brak pomiarów.\n";
        return 0;
    }
    long long suma = 0;
    for (int indeks = 0; indeks < liczbaPomiarow; indeks++)
    {
        cin >> pomiary[indeks];
        suma += pomiary[indeks];
    }
    cout << suma << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 5</summary>

Dane wejściowe:

```text
3
4 -2 7
```

Wynik:

```text
9
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak pomiarów.
```

Dane wejściowe:

```text
-1
```

Wynik:

```text
Niepoprawny rozmiar.
```

</details>

## Podsumowanie

`vector` jest standardowym sposobem przechowywania wielu elementów, gdy rozmiar nie musi być stały. Indeksy działają podobnie jak w tablicach, ale `vector` ma dodatkowe metody, takie jak `size()` i `empty()`.
