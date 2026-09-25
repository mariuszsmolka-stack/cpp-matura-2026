---
layout: default
title: Suma, średnia, minimum i maksimum
---

# Suma, średnia, minimum i maksimum

## Cel lekcji

Nauczysz się obliczać sumę i średnią elementów tablicy oraz znajdować najmniejszy i największy element.

## Krótkie wprowadzenie do problemu

Gdy dane są w tablicy, często chcemy wyciągnąć z nich jeden wynik: sumę, średnią, minimum albo maksimum.

## Wyjaśnienie idei

Suma powstaje przez stopniowe dodawanie kolejnych elementów do akumulatora. Minimum i maksimum najlepiej zacząć od pierwszego elementu tablicy.

Nie ustawiamy minimum na sztuczną liczbę typu `999999`, bo nie wiemy, jakie dane poda użytkownik.

## Składnia

```cpp
int minimum = liczby[0];
int maksimum = liczby[0];
```

Taki zapis wymaga, aby tablica logiczna miała co najmniej jeden element. Dla `n = 0` nie istnieje `liczby[0]` jako używany element.

## Przykład 1 - suma i średnia

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 1000;
    int liczby[MAKS];
    int n;
    int suma = 0;

    cin >> n;

    if (n > 0 && n <= MAKS)
    {
        for (int i = 0; i < n; i++)
        {
            cin >> liczby[i];
            suma += liczby[i];
        }

        double srednia = (double)suma / n;

        cout << "Suma: " << suma << "\n";
        cout << "Srednia: " << srednia << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:
```text
4
2 4 6 8
```

Wynik:
```text
Suma: 20
Srednia: 5
```

</details>

## Przykład 2 - minimum i maksimum

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 1000;
    int liczby[MAKS];
    int n;

    cin >> n;

    if (n > 0 && n <= MAKS)
    {
        for (int i = 0; i < n; i++)
        {
            cin >> liczby[i];
        }

        int minimum = liczby[0];
        int maksimum = liczby[0];

        for (int i = 1; i < n; i++)
        {
            if (liczby[i] < minimum)
            {
                minimum = liczby[i];
            }

            if (liczby[i] > maksimum)
            {
                maksimum = liczby[i];
            }
        }

        cout << "Minimum: " << minimum << "\n";
        cout << "Maksimum: " << maksimum << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:
```text
5
7 2 9 4 1
```

Wynik:
```text
Minimum: 1
Maksimum: 9
```

</details>

## Omówienie przykładu krok po kroku

- Program wczytuje `n` i elementy tablicy.
- Sprawdza, czy `n > 0`, bo minimum i maksimum wymagają pierwszego elementu.
- `minimum` i `maksimum` zaczynają od `liczby[0]`.
- Pętla od `i = 1` sprawdza pozostałe elementy.
- Gdy znajdzie mniejszą wartość, aktualizuje minimum.
- Gdy znajdzie większą wartość, aktualizuje maksimum.

## Kiedy tego użyć?

Tych schematów używamy przy ocenach, wynikach, temperaturach, cenach i innych danych liczbowych.

## Kiedy wybrać coś innego?

Jeżeli potrzebujesz znaleźć konkretną wartość albo policzyć wystąpienia, lepiej użyć schematu wyszukiwania lub zliczania.

## Typowe błędy

- Obliczanie średniej dla `n = 0`.
- Inicjalizacja minimum sztuczną dużą liczbą.
- Użycie dzielenia całkowitego przy średniej.
- Rozpoczęcie pętli od złego indeksu.
- Brak sprawdzenia, czy `n` mieści się w pojemności tablicy.

## Ćwiczenia

### Ćwiczenie 1

Wczytaj `n` liczb i wypisz ich sumę.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Utwórz zmienną `suma = 0` i dodawaj do niej kolejne elementy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 1000;
    int liczby[MAKS];
    int n;
    int suma = 0;

    cin >> n;

    if (n >= 0 && n <= MAKS)
    {
        for (int i = 0; i < n; i++)
        {
            cin >> liczby[i];
            suma += liczby[i];
        }

        cout << suma << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 2

Wczytaj `n` liczb i wypisz ich średnią.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Średnia wymaga `n > 0` i dzielenia rzeczywistego.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 1000;
    int liczby[MAKS];
    int n;
    int suma = 0;

    cin >> n;

    if (n > 0 && n <= MAKS)
    {
        for (int i = 0; i < n; i++)
        {
            cin >> liczby[i];
            suma += liczby[i];
        }

        cout << (double)suma / n << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 3

Wczytaj `n` liczb i wypisz największą z nich.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zacznij od `maksimum = liczby[0]`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 1000;
    int liczby[MAKS];
    int n;

    cin >> n;

    if (n > 0 && n <= MAKS)
    {
        for (int i = 0; i < n; i++)
        {
            cin >> liczby[i];
        }

        int maksimum = liczby[0];

        for (int i = 1; i < n; i++)
        {
            if (liczby[i] > maksimum)
            {
                maksimum = liczby[i];
            }
        }

        cout << maksimum << "\n";
    }

    return 0;
}
```

</details>

## Podsumowanie

Suma korzysta z akumulatora. Średnia wymaga dzielenia rzeczywistego. Minimum i maksimum najlepiej zaczynać od pierwszego elementu, ale tylko wtedy, gdy `n > 0`.