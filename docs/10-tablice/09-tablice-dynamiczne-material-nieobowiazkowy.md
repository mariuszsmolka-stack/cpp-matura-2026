---
layout: default
title: Tablice dynamiczne - materiał nieobowiązkowy
---

# Tablice dynamiczne - materiał nieobowiązkowy

> **Materiał nieobowiązkowy**
>
> Ta lekcja pokazuje ręczne zarządzanie pamięcią w C++. Nie musisz jej teraz wykonywać, aby przejść do następnego rozdziału. W większości późniejszych programów wygodniejszy będzie `vector`.

[Pomiń materiał i przejdź do rozdziału 11 - Dane złożone](../11-dane-zlozone/)

## Cel lekcji

Poznasz podstawy tablic dynamicznych tworzonych przez `new[]` i usuwanych przez `delete[]`.

## Krótkie wprowadzenie do problemu

Czasami rozmiar tablicy poznajemy dopiero podczas działania programu. W materiale podstawowym używaliśmy stałej pojemności i rozmiaru logicznego. W Code::Blocks z GCC można też spotkać VLA, czyli `int liczby[n]`, ale to rozszerzenie GNU.

Standardowy C++ ma inny mechanizm: tablicę dynamiczną tworzoną przez `new[]`.

## Prosta idea

`new int[n]` tworzy tablicę poza zwykłym zakresem lokalnych zmiennych. Wynik `new[]` pozwala programowi odnaleźć utworzoną tablicę. Zapis `int* liczby` przechowuje tę informację.

Tablica utworzona przez `new[]` istnieje do chwili wykonania `delete[]`. Samo zakończenie funkcji, która wykonała `new[]`, nie usuwa tej tablicy.

Dopiero teraz możemy nazwać `int* liczby` wskaźnikiem. W tej lekcji traktujemy wskaźnik jako informację pozwalającą dotrzeć do utworzonej tablicy.

## Składnia

Tablica dynamiczna bez zerowania:

```cpp
int* liczby = new int[n];
```

Tablica dynamiczna z elementami ustawionymi na zero:

```cpp
int* liczby = new int[n]{};
```

Usunięcie tablicy:

```cpp
delete[] liczby;
liczby = nullptr;
```

`delete[]` zwalnia tablicę utworzoną przez `new[]`. Ustawienie wskaźnika na `nullptr` zmniejsza ryzyko przypadkowego użycia starego wskaźnika.

## Przykład 1 - utworzenie i usunięcie tablicy

```cpp
#include <iostream>

using namespace std;

int main()
{
    int n;

    cout << "Podaj rozmiar: ";
    cin >> n;

    if (n < 1 || n > 1000)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    int* liczby = new int[n];

    for (int i = 0; i < n; i++)
    {
        cin >> liczby[i];
    }

    for (int i = 0; i < n; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    delete[] liczby;
    liczby = nullptr;

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:
```text
4
3 6 9 12
```

Wynik:
```text
Podaj rozmiar: 3 6 9 12
```

</details>

## Przykład 2 - tablica dynamiczna w funkcjach

```cpp
#include <iostream>

using namespace std;

void wczytaj(int* tablica, int n)
{
    for (int i = 0; i < n; i++)
    {
        cin >> tablica[i];
    }
}

void wypisz(const int* tablica, int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << tablica[i] << " ";
    }
    cout << "\n";
}

int obliczSume(const int* tablica, int n)
{
    int suma = 0;

    for (int i = 0; i < n; i++)
    {
        suma += tablica[i];
    }

    return suma;
}

int main()
{
    int n;
    cin >> n;

    if (n < 1 || n > 1000)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    int* liczby = new int[n];

    wczytaj(liczby, n);
    wypisz(liczby, n);
    cout << "Suma: " << obliczSume(liczby, n) << "\n";

    delete[] liczby;
    liczby = nullptr;

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:
```text
5
1 2 3 4 5
```

Wynik:
```text
1 2 3 4 5
Suma: 15
```

</details>

Przekazywanie tablicy dynamicznej do funkcji wygląda podobnie jak przekazywanie zwykłej tablicy. Nadal trzeba osobno przekazać rozmiar.

## Przykład 3 - zwracanie tablicy dynamicznej z funkcji

```cpp
#include <iostream>

using namespace std;

int* utworzKwadraty(int n)
{
    int* wyniki = new int[n];

    for (int i = 0; i < n; i++)
    {
        wyniki[i] = i * i;
    }

    return wyniki;
}

int main()
{
    int n = 6;
    int* kwadraty = utworzKwadraty(n);

    for (int i = 0; i < n; i++)
    {
        cout << kwadraty[i] << " ";
    }
    cout << "\n";

    delete[] kwadraty;
    kwadraty = nullptr;

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
0 1 4 9 16 25
```

</details>

Tablica dynamiczna nadal istnieje po zakończeniu funkcji `utworzKwadraty()`, bo została utworzona przez `new[]`. Dlatego `main()` musi później wykonać `delete[]`.

## Przykład 4 - funkcja ustala również rozmiar

Sam wskaźnik nie przechowuje liczby elementów. Jeżeli funkcja tworzy tablicę i sama ustala jej rozmiar, może przekazać rozmiar przez referencję.

```cpp
#include <iostream>

using namespace std;

int* utworzCiag(int poczatek, int koniec, int &rozmiar)
{
    rozmiar = koniec - poczatek + 1;

    if (rozmiar < 1)
    {
        rozmiar = 0;
        return nullptr;
    }

    int* liczby = new int[rozmiar];

    for (int i = 0; i < rozmiar; i++)
    {
        liczby[i] = poczatek + i;
    }

    return liczby;
}

int main()
{
    int rozmiar;
    int* ciag = utworzCiag(3, 7, rozmiar);

    for (int i = 0; i < rozmiar; i++)
    {
        cout << ciag[i] << " ";
    }
    cout << "\n";

    delete[] ciag;
    ciag = nullptr;

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
3 4 5 6 7
```

</details>

## Celowo błędny fragment - lokalna tablica

Tego rozwiązania nie wolno stosować:

```cpp
int* utworzTablice()
{
    int liczby[5] = {1, 2, 3, 4, 5};

    return liczby;
}
```

`liczby` jest zwykłą lokalną tablicą. Przestaje istnieć po zakończeniu funkcji. Zwrócony wskaźnik nie prowadzi później do prawidłowej tablicy.

## Lokalna tablica `static`

Dla kompletności warto znać taki zapis:

```cpp
int* pobierzTablice()
{
    static int liczby[5] = {1, 2, 3, 4, 5};

    return liczby;
}
```

Tablica `static` nie znika po zakończeniu funkcji. Wszystkie wywołania korzystają jednak z tej samej tablicy. Kolejne wywołania mogą zmienić wcześniej otrzymane dane. Rozmiar nadal jest stały. Nie wykonujemy dla niej `delete[]`. Nie jest to domyślny sposób zwracania tablic.

## Zmiana rozmiaru tablicy dynamicznej

Tablica utworzona przez `new[]` nie zwiększa się automatycznie. Aby zmienić rozmiar, trzeba:

1. Utworzyć nową większą tablicę.
2. Skopiować potrzebne elementy.
3. Usunąć starą tablicę.
4. Przypisać wskaźnik nowej tablicy.
5. Zaktualizować rozmiar.

```cpp
#include <iostream>

using namespace std;

int main()
{
    int rozmiar = 3;
    int* liczby = new int[rozmiar]{1, 2, 3};

    int nowyRozmiar = 5;
    int* wiekszaTablica = new int[nowyRozmiar]{};

    for (int i = 0; i < rozmiar; i++)
    {
        wiekszaTablica[i] = liczby[i];
    }

    wiekszaTablica[3] = 4;
    wiekszaTablica[4] = 5;

    delete[] liczby;
    liczby = wiekszaTablica;
    wiekszaTablica = nullptr;
    rozmiar = nowyRozmiar;

    for (int i = 0; i < rozmiar; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    delete[] liczby;
    liczby = nullptr;

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 2 3 4 5
```

</details>

Później `vector` będzie wykonywał podobne zarządzanie pamięcią bez ręcznego używania `new[]` i `delete[]`.

## Porównanie z VLA

- VLA, czyli `int liczby[n]`, w C++ jest rozszerzeniem GNU.
- VLA jest automatycznie usuwana po wyjściu z bloku.
- Tablica utworzona przez `new[]` jest częścią standardowego C++.
- Tablica utworzona przez `new[]` istnieje do wykonania `delete[]`.
- W obu przypadkach trzeba przekazywać rozmiar osobno.

## Typowe błędy

- Brak `delete[]` => wyciek pamięci.
- Użycie `delete` zamiast `delete[]`.
- Używanie tablicy po `delete[]`.
- Dwukrotne wykonanie `delete[]`.
- Utrata jedynego wskaźnika prowadzącego do przydzielonej pamięci.
- Zwrócenie wskaźnika do zwykłej lokalnej tablicy.
- Brak przekazania rozmiaru.
- Wyjście poza zakres tablicy.
- Założenie, że `new int[n]` automatycznie zeruje elementy.
- Pomylenie VLA z tablicą utworzoną przez `new[]`.

## Ćwiczenia fakultatywne

### Ćwiczenie nieobowiązkowe 1

Utwórz dynamiczną tablicę, wczytaj elementy i wypisz je w odwrotnej kolejności.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Po sprawdzeniu `n` utwórz `int* liczby = new int[n];`. Na końcu wykonaj `delete[] liczby;` i ustaw wskaźnik na `nullptr`.

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 1</summary>

Dane wejściowe:
```text
4
8 6 4 2
```

Wynik:
```text
2 4 6 8
```

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;

    if (n < 1 || n > 1000)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    int* liczby = new int[n];

    for (int i = 0; i < n; i++)
    {
        cin >> liczby[i];
    }

    for (int i = n - 1; i >= 0; i--)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    delete[] liczby;
    liczby = nullptr;

    return 0;
}
```

</details>

### Ćwiczenie nieobowiązkowe 2

Napisz funkcję obliczającą sumę elementów dynamicznej tablicy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Funkcja może mieć nagłówek `int suma(const int* tablica, int n)`.

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:
```text
3
10 20 30
```

Wynik:
```text
60
```

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int suma(const int* tablica, int n)
{
    int wynik = 0;

    for (int i = 0; i < n; i++)
    {
        wynik += tablica[i];
    }

    return wynik;
}

int main()
{
    int n;
    cin >> n;

    if (n < 1 || n > 1000)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    int* liczby = new int[n];

    for (int i = 0; i < n; i++)
    {
        cin >> liczby[i];
    }

    cout << suma(liczby, n) << "\n";

    delete[] liczby;
    liczby = nullptr;

    return 0;
}
```

</details>

### Ćwiczenie nieobowiązkowe 3

Napisz funkcję tworzącą i zwracającą dynamiczną tablicę zawierającą podwojone wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Funkcja tworzy nową tablicę przez `new int[n]`, wpisuje do niej wyniki i zwraca wskaźnik.

</details>

<details markdown="1">
<summary>Pokaż wynik do ćwiczenia 3</summary>

```text
2 4 6 8
```

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int* utworzPodwojone(const int* tablica, int n)
{
    int* wyniki = new int[n];

    for (int i = 0; i < n; i++)
    {
        wyniki[i] = tablica[i] * 2;
    }

    return wyniki;
}

int main()
{
    const int ROZMIAR = 4;
    int liczby[ROZMIAR] = {1, 2, 3, 4};
    int* podwojone = utworzPodwojone(liczby, ROZMIAR);

    for (int i = 0; i < ROZMIAR; i++)
    {
        cout << podwojone[i] << " ";
    }
    cout << "\n";

    delete[] podwojone;
    podwojone = nullptr;

    return 0;
}
```

</details>

## Podsumowanie

Tablice dynamiczne pozwalają utworzyć tablicę o rozmiarze znanym dopiero podczas działania programu. Dają większą elastyczność, ale wymagają odpowiedzialności: każde `new[]` musi mieć później odpowiadające mu `delete[]`.