# Przechodzenie i przetwarzanie

## Krótkie wprowadzenie do problemu

Samo przechowanie liczb nie wystarcza. Często trzeba policzyć sumę, średnią, minimum, maksimum albo znaleźć element spełniający warunek.

## Proste wyjaśnienie idei

Po `vector` można przechodzić pętlą z indeksem albo pętlą zakresową.

## Składnia

```cpp
for (int i = 0; i < (int)liczby.size(); i++)
{
    cout << liczby[i] << "\n";
}

for (int liczba : liczby)
{
    cout << liczba << "\n";
}

for (int &liczba : liczby)
{
    liczba = liczba + 1;
}
```

`int liczba` daje kopię wartości. `int &liczba` pozwala zmienić element w `vector`.

## Przykład 1 - analiza zestawu liczb

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int n;
    cin >> n;

    if (n < 1)
    {
        cout << "Brak danych.\n";
        return 0;
    }

    vector<int> liczby(n);

    for (int i = 0; i < n; i++)
    {
        cin >> liczby[i];
    }

    int suma = 0;
    int minimum = liczby[0];
    int maksimum = liczby[0];
    int wiekszeOdZera = 0;

    for (int liczba : liczby)
    {
        suma += liczba;

        if (liczba < minimum)
        {
            minimum = liczba;
        }

        if (liczba > maksimum)
        {
            maksimum = liczba;
        }

        if (liczba > 0)
        {
            wiekszeOdZera++;
        }
    }

    double srednia = (double)suma / liczby.size();

    cout << "Suma: " << suma << "\n";
    cout << "Srednia: " << srednia << "\n";
    cout << "Minimum: " << minimum << "\n";
    cout << "Maksimum: " << maksimum << "\n";
    cout << "Dodatnie: " << wiekszeOdZera << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
5
4 -2 8 0 10
```

Wynik:

```text
Suma: 20
Srednia: 4
Minimum: -2
Maksimum: 10
Dodatnie: 3
```

</details>

## Omówienie programu krok po kroku

1. Program wczytuje `n` i sprawdza, czy są dane.
2. Tworzy `vector` o rozmiarze `n`.
3. Wczytuje elementy przez indeks.
4. `suma` jest akumulatorem.
5. `minimum` i `maksimum` zaczynają od pierwszego elementu.
6. Pętla zakresowa przechodzi po wartościach.
7. Średnia wymaga dzielenia rzeczywistego.

## Przykład 2 - zmiana wszystkich wartości ujemnych na zero

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {5, -3, 8, -1, 4};

    for (int &liczba : liczby)
    {
        if (liczba < 0)
        {
            liczba = 0;
        }
    }

    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }
    cout << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
5 0 8 0 4
```

</details>

## Kiedy tego użyć?

Używaj pętli, gdy chcesz obliczyć wynik na podstawie wszystkich elementów albo zmienić wiele elementów.

## Kiedy wybrać coś innego?

Jeżeli potrzebujesz indeksu, użyj pętli z indeksem. Jeżeli wystarczy sama wartość, pętla zakresowa jest prostsza.

## Typowe błędy

- Obliczanie minimum dla pustego `vector`.
- Użycie `int liczba` zamiast `int &liczba`, gdy trzeba zmienić elementy.
- Dzielenie całkowite przy średniej.
- Odczyt `liczby[0]` bez sprawdzenia, czy są elementy.
- Mylenie indeksu z wartością elementu.

## Ćwiczenia

### Ćwiczenie 1

Wczytaj liczby do `vector` i oblicz ich sumę oraz średnią.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Po wczytaniu elementów przejdź po nich pętlą i dodawaj do zmiennej `suma`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int n;
    cin >> n;

    if (n < 1)
    {
        cout << "Brak danych.\n";
        return 0;
    }

    vector<int> liczby(n);
    int suma = 0;

    for (int i = 0; i < n; i++)
    {
        cin >> liczby[i];
        suma += liczby[i];
    }

    cout << "Suma: " << suma << "\n";
    cout << "Srednia: " << (double)suma / n << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 2

Policz, ile liczb parzystych znajduje się w `vector`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Liczba jest parzysta, gdy `liczba % 2 == 0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {4, 7, 10, 3, 8};
    int parzyste = 0;

    for (int liczba : liczby)
    {
        if (liczba % 2 == 0)
        {
            parzyste++;
        }
    }

    cout << "Parzyste: " << parzyste << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Znajdź minimum i maksimum w niepustym `vector`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zacznij od `liczby[0]`, a potem porównuj kolejne wartości.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {9, 2, 15, 4};
    int minimum = liczby[0];
    int maksimum = liczby[0];

    for (int liczba : liczby)
    {
        if (liczba < minimum) minimum = liczba;
        if (liczba > maksimum) maksimum = liczba;
    }

    cout << minimum << " " << maksimum << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 4

Sprawdź ręcznie, czy w `vector` znajduje się podana liczba.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Użyj zmiennej logicznej `znaleziono` i pętli. Nie używaj `find()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {3, 6, 9, 12};
    int szukana;
    bool znaleziono = false;

    cin >> szukana;

    for (int liczba : liczby)
    {
        if (liczba == szukana)
        {
            znaleziono = true;
        }
    }

    if (znaleziono) cout << "Jest.\n";
    else cout << "Brak.\n";

    return 0;
}
```

</details>

### Ćwiczenie 5

Zamień wszystkie wartości ujemne na zero i wypisz elementy w odwrotnej kolejności bez zmiany ich położenia.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Najpierw użyj pętli z referencją, potem pętli z indeksem od końca.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {5, -2, 7, -4, 1};

    for (int &liczba : liczby)
    {
        if (liczba < 0)
        {
            liczba = 0;
        }
    }

    for (int i = (int)liczby.size() - 1; i >= 0; i--)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

## Podsumowanie

Przetwarzanie `vector` najczęściej oznacza przejście po wszystkich elementach. Pętla zakresowa jest wygodna, a pętla z indeksem przydaje się, gdy potrzebujesz numeru elementu.
