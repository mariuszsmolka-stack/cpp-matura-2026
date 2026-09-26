---
layout: default
title: Automatyczny podgląd zmiennych
---

# Automatyczny podgląd zmiennych

## Cel lekcji

Nauczysz się odczytywać automatycznie wyświetlane wartości zmiennych lokalnych i argumentów funkcji w Code::Blocks 25.03.

## Krótkie wprowadzenie do problemu

Błąd często nie polega na tym, że program się zatrzymuje. Czasem program działa do końca, ale oblicza zły wynik.

Podgląd zmiennych pozwala zobaczyć, kiedy wartość staje się błędna.

## Watches w Code::Blocks 25.03

W starszych wersjach Code::Blocks zmienne często trzeba było ręcznie dodawać do okna obserwacji. W Code::Blocks 25.03 nie jest to potrzebne podczas podstawowego debugowania. Po zatrzymaniu programu zmienne lokalne są automatycznie widoczne w sekcji `Locals`, a argumenty funkcji w sekcji `Function arguments`.

Aby otworzyć okno, użyj `Debug -> Debugging windows -> Watches`.

Sekcja `Locals` pokazuje zmienne lokalne aktualnie wykonywanej funkcji.

Sekcja `Function arguments` pokazuje argumenty funkcji, w której aktualnie zatrzymał się program.

Nie uczymy tutaj ręcznego dodawania zmiennych. Na początku wystarczy automatyczny podgląd `Locals` i `Function arguments`.

## Następna instrukcja a wartości zmiennych

Strzałka albo podświetlony wiersz wskazuje następną instrukcję do wykonania.

Jeżeli debugger zatrzymał się na wierszu `int cena = 20;`, ten wiersz nie został jeszcze wykonany. Zmienna `cena` może być już widoczna w sekcji `Locals`, ale jej prawidłowa wartość pojawi się dopiero po wykonaniu tego wiersza.

Wartości zmiennych, których inicjalizacja nie została jeszcze wykonana, nie powinny być interpretowane. Debugger może pokazać wartość przypadkową. Nie oznacza to, że program przypisał taką wartość.

Nie przypisujemy znaczenia konkretnemu kolorowi wartości w oknie debuggera. Kolor może zależeć od wersji, motywu albo stanu okna.

## Program do obserwowania inicjalizacji

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 20;
    int liczbaSztuk = 3;
    int rabat = 5;

    int koszt = cena * liczbaSztuk - rabat;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Wykonaj kroki:

1. Ustaw punkt przerwania na wierszu `int cena = 20;`.
2. Uruchom debugger.
3. Otwórz okno `Watches`.
4. Rozwiń sekcję `Locals`.
5. Wykonuj program po jednym wierszu.
6. Obserwuj, kiedy każda zmienna otrzymuje prawidłową wartość.

## Oczekiwany przebieg

| Po wykonaniu instrukcji                   | Oczekiwana wartość |
| ----------------------------------------- | -----------------: |
| `int cena = 20;`                          |        `cena = 20` |
| `int liczbaSztuk = 3;`                    |  `liczbaSztuk = 3` |
| `int rabat = 5;`                          |        `rabat = 5` |
| `int koszt = cena * liczbaSztuk - rabat;` |       `koszt = 55` |

Ta tabela dotyczy dokładnie programu pokazanego wyżej.

## Program z licznikiem i akumulatorem

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

Wykonuj ten wiersz krok po kroku i obserwuj `i` oraz `suma` w sekcji `Locals`.

| `i` | `suma` po dodaniu |
| --: | ----------------: |
|   1 |                 1 |
|   2 |                 3 |
|   3 |                 6 |
|   4 |                10 |
|   5 |                15 |

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

Uczeń powinien zauważyć, że program wykonuje dodawanie zamiast mnożenia.

Poprawna idea obliczenia to:

```cpp
int koszt = cena * liczbaSztuk - rabat;
```

## Kiedy tego użyć?

Automatycznego podglądu używaj wtedy, gdy wynik programu jest zły, ale nie wiesz, w którym miejscu wartość zaczęła być błędna.

Debugger pozwala zobaczyć zmianę wartości dokładnie w momencie wykonania instrukcji.

## Kiedy wybrać coś innego?

Jeżeli program jest bardzo prosty, czasem wystarczy przejrzeć kod. Jeżeli jednak pojawia się pętla, funkcja albo kilka obliczeń po kolei, debugger zwykle daje szybszą odpowiedź.

## Ćwiczenia

### Ćwiczenie 1

Obserwuj kolejne inicjalizowanie zmiennych `cena`, `liczbaSztuk`, `rabat` i `koszt`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Ustaw punkt przerwania na wierszu `int cena = 20;`, otwórz `Watches` i rozwiń `Locals`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 20;
    int liczbaSztuk = 3;
    int rabat = 5;

    int koszt = cena * liczbaSztuk - rabat;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int cena = 20;`,
- następna instrukcja: inicjalizacja `cena`,
- po wykonaniu `int cena = 20;`: `cena = 20`,
- po wykonaniu `int liczbaSztuk = 3;`: `liczbaSztuk = 3`,
- po wykonaniu `int rabat = 5;`: `rabat = 5`,
- po wykonaniu obliczenia: `koszt = 55`.

</details>

### Ćwiczenie 2

Rozpoznaj wartość jeszcze niezainicjalizowaną.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Zatrzymaj program na pierwszej instrukcji w `main`. Nie interpretuj wartości zmiennych, których instrukcje inicjalizacji nie zostały jeszcze wykonane.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 20;
    int liczbaSztuk = 3;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int cena = 20;`,
- następna instrukcja: przypisanie prawidłowej wartości do `cena`,
- przed wykonaniem tej instrukcji wartość `cena` może być przypadkowa,
- po wykonaniu instrukcji: `cena = 20`,
- przypadkowa wartość przed inicjalizacją nie jest wynikiem działania programu.

</details>

### Ćwiczenie 3

Obserwuj zmianę wartości zmiennej `punkty`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Ustaw punkt przerwania przy drugim przypisaniu do zmiennej `punkty`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

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
- następna instrukcja: zmiana wartości `punkty`,
- przed wykonaniem instrukcji: `punkty = 10`,
- po wykonaniu instrukcji: `punkty = 15`.

</details>

### Ćwiczenie 4

Obserwuj licznik pętli `i` w programie wypisującym liczby od 1 do 4.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Ustaw punkt przerwania w środku pętli i obserwuj `i` w sekcji `Locals`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

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
- następna instrukcja: wypisanie aktualnej wartości `i`,
- kolejne wartości `i`: `1`, `2`, `3`, `4`,
- po zakończeniu pętli program przechodzi poza blok pętli.

</details>

### Ćwiczenie 5

Obserwuj akumulator `suma` podczas dodawania liczb od 1 do 5.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Zatrzymaj program przy instrukcji `suma = suma + i;` i wykonuj ją kilka razy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

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

- punkt przerwania: `suma = suma + i;`,
- następna instrukcja: dodanie aktualnego `i` do `suma`,
- po dodaniu `1`: `suma = 1`,
- po dodaniu `2`: `suma = 3`,
- po dodaniu `3`: `suma = 6`,
- po dodaniu `4`: `suma = 10`,
- po dodaniu `5`: `suma = 15`.

</details>

### Ćwiczenie 6

Znajdź błąd logiczny przez porównanie oczekiwanej i rzeczywistej wartości.

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
- następna instrukcja: błędne obliczenie zmiennej `koszt`,
- po wykonaniu instrukcji: `koszt = 18`,
- oczekiwany wynik to `55`, ponieważ `20 * 3 - 5 = 55`,
- błąd polega na użyciu `+` zamiast `*` między `cena` i `liczbaSztuk`.

Poprawna instrukcja:

```cpp
int koszt = cena * liczbaSztuk - rabat;
```

</details>

## Podsumowanie

W Code::Blocks 25.03 podstawowy podgląd zmiennych jest automatyczny. Zmienne lokalne znajdziesz w sekcji `Locals`, a argumenty funkcji w sekcji `Function arguments`. Najważniejsze jest rozumienie, że wskazany wiersz jest dopiero następną instrukcją do wykonania.
