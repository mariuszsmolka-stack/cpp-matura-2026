---
layout: default
title: Licznik i akumulator
---

# Licznik i akumulator

## Cel lekcji

Nauczysz się używać licznika i akumulatora w programach z pętlą.

## Krótkie wprowadzenie do problemu

Pętla często nie tylko powtarza instrukcje. Czasem musi policzyć, ile razy coś się wydarzyło, albo zgromadzić sumę kolejnych wartości.

## Wyjaśnienie idei

Licznik działa jak kartka, na której stawiamy kreskę za każdym razem, gdy coś się wydarzyło. Akumulator działa jak pudełko, do którego dokładamy kolejne wartości. Licznik zwykle zaczyna od `0`. Suma też zwykle zaczyna od `0`.

## Składnia

```cpp
int licznik = 0;
int suma = 0;

licznik++;
suma += liczba;
```

## Przykład 1 - suma liczb od 1 do n

```cpp
#include <iostream>

using namespace std;

int main()
{
    int n;
    int suma = 0;

    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        suma += i;
    }

    cout << "Suma: " << suma << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
4
```

Wynik:

```text
Suma: 10
```

</details>

## Przykład 2 - średnia z podanych liczb

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczbaElementow;
    int suma = 0;

    cin >> liczbaElementow;

    for (int i = 1; i <= liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        suma += liczba;
    }

    if (liczbaElementow > 0)
    {
        double srednia = (double)suma / liczbaElementow;
        cout << "Srednia: " << srednia << "\n";
    }
    else
    {
        cout << "Brak danych.\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
3
2
4
6
```

Pierwsza liczba określa, ile kolejnych wartości zostanie wczytanych.

Wynik:

```text
Srednia: 4
```

</details>

## Omówienie programu krok po kroku

W pierwszym programie `suma` jest akumulatorem. W drugim programie `liczbaElementow` mówi, ile wartości wczytać. Przed dzieleniem sprawdzamy, czy liczba elementów jest większa od zera.

## Kiedy tego użyć?

Używaj licznika do zliczania zdarzeń, a akumulatora do gromadzenia wyniku, na przykład sumy.

## Kiedy wybrać inną pętlę?

Jeżeli potrzebujesz zapamiętać wszystkie wartości, w późniejszych rozdziałach poznasz tablice i inne struktury. Tutaj przetwarzamy dane od razu.

## Ćwiczenia

### 1. Suma od 1 do n

Wczytaj `n` i oblicz sumę liczb od `1` do `n`.

Dane wejściowe:

```text
4
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Suma: 10
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Akumulator `suma` ustaw na `0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int n;
    int suma = 0;

    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        suma += i;
    }

    cout << "Suma: " << suma << "\n";

    return 0;
}
```

</details>

### 2. Liczba dodatnich wartości

Wczytaj `n`, a potem `n` liczb. Policz, ile z nich jest dodatnich.

Dane wejściowe:

```text
5
-2
4
0
7
-1
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Dodatnie: 2
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Zwiększ licznik tylko wtedy, gdy liczba jest większa od zera.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int n;
    int licznik = 0;

    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        int liczba;
        cin >> liczba;

        if (liczba > 0)
        {
            licznik++;
        }
    }

    cout << "Dodatnie: " << licznik << "\n";

    return 0;
}
```

</details>

### 3. Średnia

Wczytaj liczbę elementów i wartości. Oblicz średnią, jeśli liczba elementów jest większa od zera.

Dane wejściowe:

```text
3
2
4
6
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Srednia: 4
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj `(double)suma / liczbaElementow`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczbaElementow;
    int suma = 0;

    cin >> liczbaElementow;

    for (int i = 1; i <= liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        suma += liczba;
    }

    if (liczbaElementow > 0)
    {
        double srednia = (double)suma / liczbaElementow;
        cout << "Srednia: " << srednia << "\n";
    }
    else
    {
        cout << "Brak danych.\n";
    }

    return 0;
}
```

</details>

## Typowe błędy

- Brak wartości początkowej licznika.
- Brak wartości początkowej akumulatora.
- Dzielenie przez zero przy średniej.
- Mylenie licznika z akumulatorem.

## Podsumowanie

Licznik odpowiada na pytanie "ile razy?". Akumulator odpowiada na pytanie "jaki wynik zgromadziliśmy?".
