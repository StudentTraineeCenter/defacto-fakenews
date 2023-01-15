import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split

# Načtení dat z datasetu a odstranění prázdných hodnot
data = pd.read_csv('data.csv')
data.dropna(inplace=True)

# Spojíme nadpis a "tělo" z datasetu
data["text"] = data["Headline"] + " " + data["Body"]

# Rozdělíme data a label(označení pravdivosti)
X = data["text"]
y = data["Label"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Vytrénujeme model
tfidf = TfidfVectorizer()

X_train_tfidf = tfidf.fit_transform(X_train)
X_test_tfidf = tfidf.transform(X_test)

clf = MultinomialNB()

clf.fit(X_train_tfidf, y_train)

# Provedeme předpověď na testovacích datech
predictions = clf.predict(X_test_tfidf)

# Vypočítáme přesnost modelu
accuracy = accuracy_score(y_test, predictions)
print("Přesnost datasetu:", accuracy)


# Funkce která udělá předpověď na základě textu
def classify_text(text):
    news_tfidf = tfidf.transform([text])
    prediction = clf.predict(news_tfidf)[0]
    if prediction == 1:
        return "True"
    else:
        return "False"
