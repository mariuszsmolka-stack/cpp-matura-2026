---
layout: default
title: Algorytm Kadane
permalink: /14-algorytmy-podstawowe/kadane/
---

# Algorytm Kadane

Szukamy największej sumy niepustego fragmentu tablicy. Elementy muszą sąsiadować. Możemy kontynuować dotychczasowy fragment albo rozpocząć nowy od bieżącej liczby.

## Kiedy tego użyć?

Gdy trzeba wybrać jeden niepusty spójny fragment o największej sumie, bez narzuconej długości. Dane mogą zawierać zarówno wartości dodatnie, jak i ujemne.

## Kiedy wybrać coś innego?

Przy wymaganej długości dokładnie `k` rozważ stałe okno. Przy wielu pytaniach o sumy wskazanych przedziałów rozważ sumy prefiksowe.

## Przed rozpoczęciem

Powtórz zwykłe tablice, `int`, pętlę `for`, instrukcję `if` i dodawanie kolejnych wartości do zmiennej.

## Lekcje

- [Algorytm Kadane - wprowadzenie]({{ '/14-algorytmy-podstawowe/kadane/01-wprowadzenie.html' | relative_url }}) - zyski i straty, tabela stanów, liczby ujemne, rozpoznawanie problemu i zadania A-G.
