---
layout: default
title: Przesłanianie i zmienne globalne
---

# Przesłanianie i zmienne globalne

## Cel lekcji

Nauczysz się rozpoznawać przesłanianie zmiennej oraz ostrożnie korzystać ze zmiennych globalnych.

## Krótkie wprowadzenie do problemu

W różnych zakresach mogą istnieć dwie zmienne o tej samej nazwie. Taki kod działa, ale bywa mylący. Programista musi wtedy wiedzieć, której zmiennej właśnie używa.

## Wyjaśnienie idei prostymi słowami

Przesłanianie oznacza, że zmienna z bloku wewnętrznego ma taką samą nazwę jak zmienna z bloku zewnętrznego. Wewnątrz tego bloku używana jest zmienna bliższa, czyli lokalna.

Zmienna globalna jest zadeklarowana poza funkcjami. Może być dostępna w wielu funkcjach. To bywa wygodne w małych programach, ale w większych utrudnia ustalenie, która część kodu zmieniła wartość.

## Składnia

```cpp
#include <iostream>

using namespace std;

int licznik = 10;

int main()
{
    int licznik = 5;
    cout << licznik << "\n";
    cout << ::licznik << "\n";

    return 0;
}
```

Operator `::` pozwala odwołać się do zmiennej globalnej, gdy lokalna ma tę samą nazwę. Nie jest to zachęta do częstego tworzenia takich samych nazw.

## Przykład 1 - przesłanianie zmiennej

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wynik = 100;

    if (wynik > 0)
    {
        int wynik = 5;
        cout << "W bloku: " << wynik << "\n";
    }

    cout << "Po bloku: " << wynik << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
W bloku: 5
Po bloku: 100
```

</details>

## Przykład 2 - zmienna globalna i stała globalna

```cpp
#include <iostream>

using namespace std;

const int minimalnyWynik = 50;
int liczbaProb = 0;

int main()
{
    int punkty;

    cin >> punkty;
    liczbaProb++;

    if (punkty >= minimalnyWynik)
    {
        cout << "Zaliczone\n";
    }
    else
    {
        cout << "Nie zaliczone\n";
    }

    cout << "Liczba prob: " << liczbaProb << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
72
```

Wynik:

```text
Zaliczone
Liczba prob: 1
```

</details>

## Omówienie najważniejszego przykładu krok po kroku

W pierwszym przykładzie zewnętrzna zmienna `wynik` ma wartość `100`. W bloku `if` powstaje druga zmienna o tej samej nazwie. Ona przesłania zmienną zewnętrzną. Po wyjściu z bloku znów widoczna jest zewnętrzna zmienna `wynik`.

## Kiedy tego użyć?

Zmienne globalne mogą być skuteczne w małych programach, gdy naprawdę potrzebujesz wspólnego stanu. Globalna stała, na przykład `minimalnyWynik`, bywa czytelna, bo nie zmienia wartości.

## Kiedy wybrać coś innego?

W większym programie lepiej przekazywać dane przez parametry funkcji i zwracać wyniki. Dzięki temu łatwiej zobaczyć, skąd bierze się wartość.

## Typowe błędy

- Przypadkowe przesłonięcie zmiennej lokalnej.
- Myślenie, że zmiana zmiennej lokalnej zmieniła globalną.
- Nadmierne używanie zmiennych globalnych.
- Nadawanie tej samej nazwy zmiennym w kilku zakresach bez potrzeby.
- Szukanie błędu w złym miejscu, bo wartość globalna została zmieniona gdzie indziej.

## Ćwiczenia

### 1. Dwie zmienne o tej samej nazwie

Utwórz zmienną `liczba` w `main`, a potem drugą zmienną `liczba` w bloku `if`. Wypisz obie wartości w odpowiednich miejscach.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

W bloku `if` lokalna zmienna przesłoni zmienną zewnętrzną.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba = 10;

    if (liczba > 0)
    {
        int liczba = 3;
        cout << liczba << "\n";
    }

    cout << liczba << "\n";

    return 0;
}
```

</details>

### 2. Globalna stała

Utwórz globalną stałą `pelnoletnosc` równą `18`. Wczytaj wiek i sprawdź, czy użytkownik jest pełnoletni.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Stałą globalną zapisz przed funkcją `main`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

const int pelnoletnosc = 18;

int main()
{
    int wiek;

    cin >> wiek;

    if (wiek >= pelnoletnosc)
    {
        cout << "Pelnoletni\n";
    }
    else
    {
        cout << "Niepelnoletni\n";
    }

    return 0;
}
```

</details>

### 3. Operator zakresu

Utwórz globalną zmienną `wartosc = 20` i lokalną zmienną `wartosc = 7`. Wypisz lokalną i globalną wartość.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Do globalnej zmiennej odwołaj się przez `::wartosc`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int wartosc = 20;

int main()
{
    int wartosc = 7;

    cout << wartosc << "\n";
    cout << ::wartosc << "\n";

    return 0;
}
```

</details>

## Podsumowanie

Przesłanianie działa, ale łatwo myli czytelnika. Zmienne globalne bywają użyteczne, lecz trzeba stosować je ostrożnie. Globalne stałe są zwykle bezpieczniejszym i czytelniejszym pomysłem.