# Wstawianie i usuwanie ze środka

## Krótkie wprowadzenie do problemu

`push_back()` działa na końcu. Czasami trzeba jednak wstawić element na początku albo usunąć element ze środka.

## Proste wyjaśnienie idei

`insert()` wstawia element we wskazane miejsce. `erase()` usuwa element z wybranej pozycji. Elementy po tej pozycji muszą zostać przesunięte.

## Składnia

```cpp
liczby.insert(liczby.begin() + pozycja, wartosc);
liczby.erase(liczby.begin() + pozycja);
```

`begin() + pozycja` oznacza miejsce operacji. To jeszcze nie jest pełna teoria iteratorów.

## Przykład 1 - lista wyników

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> wyniki = {10, 20, 30};
    int pozycja, wartosc;

    cin >> pozycja >> wartosc;

    if (pozycja >= 0 && pozycja <= (int)wyniki.size())
    {
        wyniki.insert(wyniki.begin() + pozycja, wartosc);
    }
    else
    {
        cout << "Bledna pozycja.\n";
    }

    cin >> pozycja;

    if (pozycja >= 0 && pozycja < (int)wyniki.size())
    {
        wyniki.erase(wyniki.begin() + pozycja);
    }
    else
    {
        cout << "Bledna pozycja.\n";
    }

    for (int wynik : wyniki)
    {
        cout << wynik << " ";
    }
    cout << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
1 15
3
```

Wynik:

```text
10 15 20
```

</details>

## Omówienie programu krok po kroku

1. Program tworzy trzy wyniki.
2. Pozycja wstawienia może być od `0` do `size()`.
3. `insert()` wstawia nową wartość i przesuwa dalsze elementy.
4. Pozycja usuwania musi być od `0` do `size() - 1`.
5. `erase()` usuwa element i przesuwa kolejne w lewo.

## Przykład 2 - dodanie na początek

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> kolejka = {2, 3, 4};

    kolejka.insert(kolejka.begin(), 1);

    for (int osoba : kolejka)
    {
        cout << osoba << " ";
    }
    cout << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 2 3 4
```

</details>

## Kiedy tego użyć?

Użyj `insert()` i `erase()`, gdy potrzebujesz zmienić środek listy danych: kolejkę, listę wyników albo prosty plan zadań.

## Kiedy wybrać coś innego?

Częste wstawianie na początku dużego zbioru może być kosztowne, bo elementy są przesuwane. Później poznasz kontenery lepsze do takich zadań.

## Typowe błędy

- Wstawianie pod pozycję większą niż `size()`.
- Usuwanie pod pozycją równą `size()`.
- Mylenie indeksu elementu z miejscem wstawienia.
- Brak sprawdzenia poprawności pozycji.
- Zakładanie, że wstawianie w środku nic nie kosztuje.

## Ćwiczenia

### Ćwiczenie 1

Wstaw liczbę na początek `vector`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `insert(liczby.begin(), wartosc)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {2, 3, 4};
    liczby.insert(liczby.begin(), 1);

    for (int liczba : liczby) cout << liczba << " ";
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 2

Wczytaj pozycję i wartość. Wstaw wartość tylko dla poprawnej pozycji.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Poprawna pozycja wstawienia może być równa `size()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {10, 20, 30};
    int pozycja, wartosc;
    cin >> pozycja >> wartosc;

    if (pozycja >= 0 && pozycja <= (int)liczby.size())
    {
        liczby.insert(liczby.begin() + pozycja, wartosc);
    }

    for (int liczba : liczby) cout << liczba << " ";
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Usuń element z podanej pozycji, jeśli pozycja jest poprawna.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Poprawna pozycja usuwania jest mniejsza niż `size()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {5, 10, 15, 20};
    int pozycja;
    cin >> pozycja;

    if (pozycja >= 0 && pozycja < (int)liczby.size())
    {
        liczby.erase(liczby.begin() + pozycja);
    }

    for (int liczba : liczby) cout << liczba << " ";
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 4

Wykonaj serię operacji: dopisz element na koniec, wstaw element na pozycję `1`, usuń element z pozycji `0`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Połącz `push_back()`, `insert()` i `erase()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {10, 30};

    liczby.push_back(40);
    liczby.insert(liczby.begin() + 1, 20);
    liczby.erase(liczby.begin());

    for (int liczba : liczby) cout << liczba << " ";
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 5

Wczytaj pozycję usuwania. Jeżeli jest błędna, wypisz komunikat.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Użyj `else`, gdy warunek poprawności pozycji jest fałszywy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {1, 2, 3};
    int pozycja;
    cin >> pozycja;

    if (pozycja >= 0 && pozycja < (int)liczby.size())
    {
        liczby.erase(liczby.begin() + pozycja);
    }
    else
    {
        cout << "Bledna pozycja.\n";
    }

    return 0;
}
```

</details>

## Podsumowanie

`insert()` i `erase()` pozwalają pracować ze środkiem `vector`, ale wymagają sprawdzenia pozycji i mogą przesuwać wiele elementów.
