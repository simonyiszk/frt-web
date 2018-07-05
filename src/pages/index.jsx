import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import ManagementSection from '../components/ManagementSection';
import NewsSection from '../components/NewsSection';
import SectionTitle from '../components/SectionTitle';

const IndexPage = () => (
  <Layout>
    <Container>
      <NewsSection />

      <article>
        <SectionTitle>Csapattörténet</SectionTitle>
        <p>
          A BME Formula Racing Teamet 2007 elején hívta életre néhány tehetséges
          mérnökhallgató, hogy első és anno egyetlen magyar csapatként
          versenyautót építsenek és részt vegyenek a világméretű Formula Student
          versenysorozatban.
        </p>
        <p>
          Az akkor még csak 18 fős alakulatot követte egy 50 fős második
          generáció, valamint egy harmadik generációs Junior csapat, akikkel
          kiegészülve az FRT ma már mintegy 100 tagot számlál, az egyetem számos
          különböző karát képviselve. A csapat mérnökei és menedzserei különböző
          területeken dolgoznak ugyanazért a célért, a leendő mérnökök tudásának
          gyarapításáért és a minél jobb eredmények eléréséért, valamint hogy
          megteremtsék a magas szintű anyagi, szervezeti és tárgyi feltételeket.
          Többek között ennek köszönhető, hogy 2007 óta kitűnően helytálltak a
          világ legjobbjai között német, angol, olasz és magyar versenyeken.
        </p>
        <p>
          A csapat hatékony működését igazolja, hogy egyre jobb műszaki
          eredményekkel, és az iparban is helytálló munkaerővel szolgál. A
          Formula Racing Team nagy hangsúlyt fektet az oktatásra, ezért a
          csapatnál dolgozó idősebb, és nagy tudású mérnökök elméleti
          ismeretekkel is segítik a Junior csapatot. Minden adott tehát ahhoz,
          hogy a csapat még évekig képviselje Magyarországot és a BME-t a
          Formula Student versenyeken, lehetőséget adva ezzel a hallgatóknak,
          hogy a legjobbak között versenyezzenek.
        </p>
      </article>

      <ManagementSection />
    </Container>
  </Layout>
);

export default IndexPage;
