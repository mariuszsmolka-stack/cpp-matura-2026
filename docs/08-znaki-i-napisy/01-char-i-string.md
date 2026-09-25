---
layout: default
title: char i string
---

# `char` i `string`

## Cel lekcji

Nauczysz się odróżniać pojedynczy znak od napisu oraz wczytywać znak, słowo i cały wiersz.

## Krótkie wprowadzenie do problemu

Program często pracuje z tekstem. Czasem wystarczy jeden znak, na przykład `t` albo `n`. Innym razem potrzebne jest słowo albo całe zdanie.

## Wyjaśnienie idei metodą Feynmana

`char` to jedno miejsce na jeden znak. `string` to uporządkowany szereg znaków.

- `'A'` jest wartością typu `char`.
- `"A"` jest napisem typu `string`.
- `""` jest poprawnym pustym napisem.
- `''` nie jest poprawnym pustym znakiem.
- `char` nie służy do przechowywania całego wyrazu.

## Składnia

```cpp
#include <string>

char znak = 'A';
string tekst = "Ala";
```

Znak zapisujemy w apostrofach. Napis zapisujemy w cudzysłowie. Do typu `string` dodajemy nagłówek `<string>`.

## Przykład 1 - znak i napis

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    char znak = 'A';
    string tekst = "Ala";

    cout << "Znak: " << znak << "\n";
    cout << "Napis: " << tekst << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Znak: A
Napis: Ala
```

</details>

## Przykład 2 - wczytywanie tekstu

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    char litera;
    string slowo;
    string zdanie;

    cout << "Podaj litere: ";
    cin >> litera;

    cout << "Podaj slowo: ";
    cin >> slowo;

    cout << "Podaj zdanie: ";
    getline(cin >> ws, zdanie);

    cout << "Litera: " << litera << "\n";
    cout << "Slowo: " << slowo << "\n";
    cout << "Zdanie: " << zdanie << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
M
kot
Ala ma kota
```

Wynik:

```text
Podaj litere: Podaj slowo: Podaj zdanie: Litera: M
Slowo: kot
Zdanie: Ala ma kota
```

</details>

## Omówienie najważniejszego przykładu krok po kroku

Najpierw program wczytuje jeden znak do zmiennej `litera`. Potem `cin >> slowo` wczytuje jeden wyraz, czyli kończy czytanie na spacji. Na końcu `getline(cin >> ws, zdanie)` wczytuje cały wiersz. `ws` usuwa białe znaki pozostałe po wcześniejszym `cin`.

## Kiedy tego użyć?

Użyj `char`, gdy potrzebujesz dokładnie jednego znaku. Użyj `string`, gdy potrzebujesz słowa, zdania, nazwy użytkownika albo innego dłuższego tekstu.

## Kiedy wybrać coś innego?

Jeżeli tekst ma być liczbą do obliczeń, wczytaj go jako typ liczbowy. Jeżeli potrzebujesz wielu napisów naraz, później poznasz tablice i kontenery.

## Ćwiczenia

### 1. Jeden znak

Wczytaj jeden znak i wypisz `Wczytany znak: ...`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Utwórz zmienną typu `char` i wczytaj ją przez `cin`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    char znak;

    cin >> znak;

    cout << "Wczytany znak: " << znak << "\n";

    return 0;
}
```

</details>

### 2. Jedno słowo

Wczytaj jedno słowo i wypisz je w zdaniu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj typu `string` i zwykłego `cin >> slowo`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string slowo;

    cin >> slowo;

    cout << "Podane slowo: " << slowo << "\n";

    return 0;
}
```

</details>

### 3. Cały wiersz

Wczytaj całe zdanie i wypisz je w nowym wierszu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj `getline(cin >> ws, zdanie)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string zdanie;

    getline(cin >> ws, zdanie);

    cout << zdanie << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Zapisanie znaku w cudzysłowie zamiast w apostrofach.
- Próba zapisania całego słowa w zmiennej typu `char`.
- Oczekiwanie, że `cin >> tekst` wczyta tekst ze spacjami.
- Pominięcie `#include <string>` przy użyciu typu `string`.
- Mylenie pustego napisu `""` z niepoprawnym pustym znakiem.

## Podsumowanie

`char` przechowuje jeden znak. `string` przechowuje napis. Do słów wystarczy `cin`, a do całych zdań używamy `getline(cin >> ws, tekst)`.