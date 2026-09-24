---
layout: default
title: using namespace std;
---

# using namespace std;

## Cel lekcji

Zrozumiesz, czym jest przestrzeń nazw `std` i co robi zapis `using namespace std;`.

## Krótkie wprowadzenie do problemu

W dużym języku programowania wiele nazw może się powtarzać. Różne biblioteki mogą mieć elementy o takiej samej nazwie.

Przestrzeń nazw pomaga uporządkować nazwy i uniknąć pomyłek.

## Wyjaśnienie idei

Przestrzeń nazw działa jak podpis na półce. `std` oznacza elementy z biblioteki standardowej C++.

Dlatego piszemy `std::cout`, `std::cin` i `std::string`.

Zapis `using namespace std;` mówi: w tym pliku możesz korzystać z nazw ze `std` bez dopisywania `std::` za każdym razem.

## Składnia

```cpp
using namespace std;
```

Ten zapis umieszczamy zwykle po dyrektywach `#include`.

## Pełny przykład programu

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string imie;

    cout << "Podaj imie: ";
    cin >> imie;

    cout << "Witaj, " << imie << "\n";

    return 0;
}
```

<details>
<summary>Pokaż wynik</summary>

```text
Podaj imie: Anna
Witaj, Anna
```

</details>

## Omówienie programu krok po kroku

`#include <iostream>` daje dostęp do `cout` i `cin`.

`#include <string>` daje dostęp do typu `string`.

`using namespace std;` pozwala pisać `cout` zamiast `std::cout`, `cin` zamiast `std::cin` i `string` zamiast `std::string`.

Program wczytuje imię i wypisuje powitanie.

## Świadoma zasada kursu

W prostych programach uczniowskich kurs dopuszcza `using namespace std;`.

Uczeń ma jednak rozumieć, co ten zapis robi. Nie jest to magiczna linia do wklejenia bez myślenia.

W większych projektach pełne nazwy albo selektywne `using` bywają bezpieczniejsze, bo zmniejszają ryzyko konfliktu nazw.

Nie należy umieszczać `using namespace std;` we własnych plikach nagłówkowych.

## Kiedy tego użyć?

Możesz użyć `using namespace std;` w krótkim programie szkolnym, gdy kod ma być prostszy do czytania i cały program znajduje się w jednym pliku `.cpp`.

## Kiedy wybrać coś innego?

W większym projekcie albo w kodzie bibliotecznym bezpieczniej pisać pełne nazwy, na przykład `std::cout`, albo używać tylko wybranych nazw.

## Ćwiczenia

1. Przepisz program z `std::cout` i `std::cin` na wersję z `using namespace std;`.
2. Napisz program, który wczytuje imię i wiek, a potem wypisuje jedno zdanie.
3. Wyjaśnij własnymi słowami, co skraca `using namespace std;`.

<details>
<summary>Pokaż wskazówkę</summary>

Po dodaniu `using namespace std;` możesz usunąć `std::` przed `cout`, `cin` i `string`.

</details>

<details>
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string imie;
    int wiek = 0;

    cout << "Podaj imie: ";
    cin >> imie;

    cout << "Podaj wiek: ";
    cin >> wiek;

    cout << "Mam na imie " << imie << " i mam " << wiek << " lat.\n";

    return 0;
}
```

</details>

## Typowe błędy

- Traktowanie `using namespace std;` jako obowiązkowej magicznej linijki.
- Pisanie `using namespace std` bez średnika.
- Umieszczanie tego zapisu we własnym pliku nagłówkowym.
- Myślenie, że `using namespace std;` dołącza bibliotekę. Biblioteki nadal wymagają `#include`.

## Podsumowanie

`std` to przestrzeń nazw biblioteki standardowej. `using namespace std;` skraca zapis, ale trzeba używać go świadomie.
