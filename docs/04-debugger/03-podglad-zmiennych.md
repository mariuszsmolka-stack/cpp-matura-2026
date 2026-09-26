---
layout: default
title: Podgląd wartości zmiennych
---

# Podgląd wartości zmiennych

## Cel lekcji

Nauczysz się obserwować wartości zmiennych podczas działania programu i odróżniać wartość aktualną od wartości, która dopiero powstanie po wykonaniu instrukcji.

## Krótkie wprowadzenie do problemu

Błąd często nie polega na tym, że program się zatrzymuje. Czasem program działa do końca, ale oblicza zły wynik.

Podgląd zmiennych pozwala zobaczyć, kiedy wartość staje się błędna.

## Gdzie oglądać zmienne?

Code::Blocks może pokazywać zmienne lokalne podczas debugowania. Możesz też dodać wybrane zmienne do okna `Watches`.

W praktyce na początku wystarczy obserwować:

- zmienne lokalne,
- argumenty funkcji,
- licznik pętli,
- akumulator,
- wynik obliczenia.

Nie musisz znać stosu wywołań, rejestrów procesora ani konsoli GDB.

## Program z akumulatorem

```cpp
#include <iostream>

using namespace std;

int main()
{
    int suma = 0;

    for (int i = 1; i <= 5; i++)
    {
        suma = suma + i;
    }

    cout << "Suma: " << suma << '\n';

    return 0;
}
```

Ustaw punkt przerwania przy wierszu:

```cpp
suma = suma + i;
```

Wykonuj ten wiersz krok po kroku i obserwuj `i` oraz `suma`.

## Oczekiwane wartości

Ta tabela dotyczy dokładnie programu pokazanego wyżej.

| `i` | `suma` po dodaniu |
| --: | ----------------: |
|   1 |                 1 |
|   2 |                 3 |
|   3 |                 6 |
|   4 |                10 |
|   5 |                15 |

Ważne: gdy debugger zatrzyma się na wierszu `suma = suma + i;`, ta instrukcja najczęściej jeszcze nie została wykonana. Wartość po dodaniu zobaczysz dopiero po przejściu do następnego kroku.

## Okno Watches

Do okna `Watches` dodaj zmienne, które chcesz obserwować cały czas, na przykład `i` i `suma`.

Warto dodawać tylko kilka zmiennych. Zbyt długa lista przeszkadza w skupieniu się na problemie.

## Przykład z błędem logicznym

Program poniżej kompiluje się, ale źle oblicza koszt zakupów.

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 20;
    int liczbaSztuk = 3;
    int rabat = 5;

    int koszt = cena + liczbaSztuk - rabat;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Uczeń powinien zauważyć, że program dodaje `cena + liczbaSztuk`, a powinien pomnożyć cenę przez liczbę sztuk.

Poprawna idea obliczenia to:

```cpp
int koszt = cena * liczbaSztuk - rabat;
```

## Kiedy tego użyć?

Podglądu zmiennych używaj wtedy, gdy wynik programu jest zły, ale nie wiesz, w którym miejscu wartość zaczęła być błędna.

Debugger pozwala zobaczyć zmianę wartości dokładnie w momencie wykonania instrukcji.

## Kiedy wybrać coś innego?

Jeżeli program jest bardzo prosty, czasem wystarczy przejrzeć kod. Jeżeli jednak pojawia się pętla, funkcja albo kilka obliczeń po kolei, debugger zwykle daje szybszą odpowiedź.

## Ćwiczenia

### Ćwiczenie 1

Obserwuj zmienną przed zmianą i po zmianie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Ustaw punkt przerwania przy drugim przypisaniu do zmiennej `punkty`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int punkty = 10;
    punkty = 15;

    cout << "Punkty: " << punkty << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `punkty = 15;`,
- przed wykonaniem instrukcji: `punkty = 10`,
- po wykonaniu instrukcji: `punkty = 15`.

</details>

### Ćwiczenie 2

Obserwuj licznik pętli `i` w programie wypisującym liczby od 1 do 4.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Ustaw punkt przerwania w środku pętli i dodaj `i` do obserwowanych zmiennych.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    for (int i = 1; i <= 4; i++)
    {
        cout << i << '\n';
    }

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: wiersz `cout << i << '\n';`,
- kolejne wartości `i`: `1`, `2`, `3`, `4`,
- po zakończeniu pętli program przechodzi poza blok pętli.

</details>

### Ćwiczenie 3

Obserwuj akumulator `suma` podczas dodawania liczb od 1 do 5.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zatrzymaj program przy instrukcji `suma = suma + i;` i wykonuj ją kilka razy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int suma = 0;

    for (int i = 1; i <= 5; i++)
    {
        suma = suma + i;
    }

    cout << "Suma: " << suma << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- po dodaniu `1`: `suma = 1`,
- po dodaniu `2`: `suma = 3`,
- po dodaniu `3`: `suma = 6`,
- po dodaniu `4`: `suma = 10`,
- po dodaniu `5`: `suma = 15`.

</details>

### Ćwiczenie 4

Dodaj do `Watches` dwie zmienne: `cena` i `koszt`. Sprawdź, kiedy `koszt` otrzymuje poprawną wartość.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Zatrzymaj program przed instrukcją obliczającą `koszt`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 30;
    int liczbaSztuk = 2;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int koszt = cena * liczbaSztuk;`,
- przed wykonaniem instrukcji: `cena = 30`, `liczbaSztuk = 2`,
- po wykonaniu instrukcji: `koszt = 60`,
- w `Watches` warto obserwować `cena` i `koszt`.

</details>

### Ćwiczenie 5

Obserwuj argumenty gotowej funkcji obliczającej cenę po rabacie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Wejdź do funkcji i sprawdź wartości `cena` oraz `rabat`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>

using namespace std;

int cenaPoRabacie(int cena, int rabat)
{
    int wynik = cena - rabat;
    return wynik;
}

int main()
{
    int cena = 50;
    int rabat = 7;

    int wynik = cenaPoRabacie(cena, rabat);

    cout << "Cena: " << wynik << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- przed wejściem do funkcji: `cena = 50`, `rabat = 7`,
- po wejściu do funkcji: argumenty mają wartości `50` i `7`,
- po wykonaniu obliczenia: lokalna zmienna `wynik = 43`,
- po powrocie do `main`: zmienna `wynik` w `main` ma wartość `43`.

</details>

### Ćwiczenie 6

Znajdź błąd przez porównanie oczekiwanej i rzeczywistej wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Program powinien policzyć koszt po rabacie. Sprawdź wartość `koszt` zaraz po obliczeniu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 20;
    int liczbaSztuk = 3;
    int rabat = 5;

    int koszt = cena + liczbaSztuk - rabat;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int koszt = cena + liczbaSztuk - rabat;`,
- po wykonaniu instrukcji: `koszt = 18`,
- oczekiwany wynik to `55`, ponieważ `20 * 3 - 5 = 55`,
- błąd polega na użyciu `+` zamiast `*` między `cena` i `liczbaSztuk`.

Poprawna instrukcja:

```cpp
int koszt = cena * liczbaSztuk - rabat;
```

</details>

## Podsumowanie

Podgląd zmiennych pokazuje rzeczywiste wartości w czasie działania programu. Najważniejsze jest porównanie tego, czego oczekujesz, z tym, co naprawdę widzi debugger.
