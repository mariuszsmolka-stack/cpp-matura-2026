---
layout: default
title: Pętla zakresowa i przechodzenie po napisie
---

# Pętla zakresowa i przechodzenie po napisie

## Cel lekcji

Nauczysz się przechodzić po znakach napisu za pomocą pętli zakresowej.

## Krótkie wprowadzenie do problemu

Gdy chcemy wykonać tę samą czynność dla każdego znaku napisu, nie zawsze potrzebujemy ręcznego licznika. Pętla zakresowa daje po kolei każdy znak.

## Wyjaśnienie idei

Zmienna `znak` otrzymuje kolejne znaki napisu. Nie podajemy indeksu ani ręcznie nie zwiększamy licznika. Jeżeli potrzebny jest numer pozycji, zwykła pętla `for` z licznikiem będzie lepsza. W tej lekcji nie modyfikujemy znaków i nie używamy indeksowania napisu.

## Składnia

```cpp
for (char znak : tekst)
{
    cout << znak << "\n";
}
```

## Przykład 1 - każdy znak w osobnym wierszu

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tekst = "C++";

    for (char znak : tekst)
    {
        cout << znak << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
C
+
+
```

</details>

## Przykład 2 - liczenie litery a

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tekst = "matura";
    int licznik = 0;

    for (char znak : tekst)
    {
        if (znak == 'a')
        {
            licznik++;
        }
    }

    cout << "Liczba liter a: " << licznik << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Liczba liter a: 2
```

</details>

## Omówienie programu krok po kroku

Pierwszy program wypisuje każdy znak napisu osobno. Drugi program sprawdza każdy znak i zwiększa licznik tylko dla litery `a`. Pętla zakresowa nie wymaga ręcznego licznika.

## Kiedy tego użyć?

Użyj pętli zakresowej, gdy chcesz przejść po wszystkich znakach napisu i nie potrzebujesz numeru pozycji.

## Kiedy wybrać inną pętlę?

Jeżeli potrzebujesz indeksu, pozycji znaku albo modyfikowania napisu, wrócisz do innych technik w rozdziale 08.

## Ćwiczenia

### 1. Wypisz znaki

Dla napisu `kot` wypisz każdy znak w osobnym wierszu.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
k
o
t
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `for (char znak : tekst)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tekst = "kot";

    for (char znak : tekst)
    {
        cout << znak << "\n";
    }

    return 0;
}
```

</details>

### 2. Policz literę a

Policz, ile razy litera `a` występuje w napisie `matura`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Liczba liter a: 2
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Zwiększ licznik, gdy `znak == 'a'`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tekst = "matura";
    int licznik = 0;

    for (char znak : tekst)
    {
        if (znak == 'a')
        {
            licznik++;
        }
    }

    cout << "Liczba liter a: " << licznik << "\n";

    return 0;
}
```

</details>

### 3. Pomiń spacje

Wypisz znaki napisu `A B` bez spacji.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
A
B
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Jeżeli znak jest spacją, użyj `continue`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tekst = "A B";

    for (char znak : tekst)
    {
        if (znak == ' ')
        {
            continue;
        }

        cout << znak << "\n";
    }

    return 0;
}
```

</details>

### 4. Policz znaki różne od spacji

Policz znaki różne od spacji w napisie `A B C`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 4</summary>

```text
Znaki bez spacji: 3
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Zwiększ licznik tylko wtedy, gdy znak nie jest spacją.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string tekst = "A B C";
    int licznik = 0;

    for (char znak : tekst)
    {
        if (znak != ' ')
        {
            licznik++;
        }
    }

    cout << "Znaki bez spacji: " << licznik << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Próba użycia pętli zakresowej, gdy potrzebny jest indeks.
- Mylenie znaku w apostrofach z napisem w cudzysłowie.
- Modyfikowanie znaków bez zrozumienia referencji.
- Oczekiwanie, że pętla zakresowa sama poda numer pozycji.

## Podsumowanie

Pętla zakresowa upraszcza przechodzenie po znakach napisu. Znaki, napisy i kody ASCII zostaną dokładniej omówione w rozdziale 08.
