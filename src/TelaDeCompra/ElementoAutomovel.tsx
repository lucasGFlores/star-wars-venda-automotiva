import t16 from "../autImages/T-16_skyhopper_-_SW_20.webp";
import tbomber from "../autImages/TIE_Bomber.webp";
import sandCrawler from "../autImages/Sand Crawler.jpeg";
import "../styles/cardElement.css";
import { CSSProperties } from "react";
import sand from "../autImages/Sand Crawler.jpeg"
import store from "../Controlers/ControlerForm";
import { Link } from "react-router-dom";
const ElementoAutomovel = ({
  url,
  fabricante,
  nome,
  modelo,
  tipo,
  velocidade,
  preco,
  style,
  className,
}: {
  url:string,
  fabricante: string;
  nome: string;
  modelo: string;
  tipo: string;
  velocidade: string;
  preco: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
 const imageList: any = {
   "Sand Crawler": sandCrawler,
   "T-16 skyhopper": t16,
   "X-34 landspeeder":
     "https://www.motortrend.com/uploads/sites/21/2020/04/007-Junkyard-Empire-Replica-Star-Wars-X-34-Landspeeder.jpg",

   "TIE/LN starfighter":
     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgYGBwYGhgcHBoYGBoYGBkZGRgcGRocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAIBAgQEBAMFBwIFAwUAAAECEQADBBIhMQVBUWEGInGBEzKRQlKhscEUI2JygtHwB/FjkqKy4RVDwiQ0U4PS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEAAwEAAwEAAgICAwAAAAAAAAECEQMhMRIEQSJRYZETMoH/2gAMAwEAAhEDEQA/APNsDifsmjGHfl9Kzdo0YwGKEhWP8rf3reTJha1a0aOXL8dK6tvLB+yfwq/hbiuw0hogjkdKje3kJQ/KdqfQMpYi2UM8jXGTMJ5/nVnJ9hvY1WUZGg/KdPTvTEUsSJ05xFVs5gA7iiWKEb7g79aHOQWI9x2qKRaYxEJyldwYNbXgzDIVPSZ6HWsgsqQy+h/Q1reEMTbYwASRPeov/qOfS7hlEKZ2zE9qtWGjzkSSYQduvqaHiQVTkVzN78q7b4qiXVDnlt0Eae5rnfZ0Lo11hIUZhPP3NI29elcwGORwI+lE0We4rFy12WqMB4l8Pq8ukK3basDisMyNlYQRXu+IwiMu0VjuOcAF0gDfrWnHy48ZFwn2jzGaQFE+K8Hey2Vh78qHKY32rqT052s9GbUW4VhmIzoJd2NqyDtnIl3P8KITryLA/ZqHCYb4rrbRfM5CjXQdSewEn2o5xXELhF8hh8nw7W0pbnMzmNndpc8wCBO4piAvF7slMNZ8yqQoiQbjsRmYg65maNOQCjlW+xZGDwYRfmRMgI5uT52HrcYmP+Gayf8ApvgPiYk3mEiyM4nY3HlbYPvmYHqgoh4+xua4lpTIChyexkJ7kZn/AP2UFGQcE09ErqJXWoA4DlqzbuA71V/IVF8TWgC3escxVUirlm7PrTb6CgCrFRstSxXGNJgMDcuVTT0qvFOTSgCyhpzPUOaaU0aLDrNSUTSArs0hjXt01CVO9Tg1G6a0wC+BMLmOsmKVQtjAEVcsQZpVXQGdRtx1qW2ahqxdKCMhJ0EzprGvtNCJYdwOKkAMYI2b8posrlwZ+lZTC3dda0+AuCARy09q2lb2YttdErrIg/MPrpUNwBhB+Yfj3q/eTMMy7j8R0qjf1AddOR7Gprroue+ytkLIwO6mPb7J/ShLjXuKP4e4J13iCOoodxHCwfyPUVGl5hDYdYOYSOZHStLwUn4cFtJGU9V10rGpeZG/AjkR0rZcBuH4RlYUar3Gu1RfhU+ll7gTMx1gADuax15mZixMkmTRfH4nM2QbT9SaV3BZlVQACPtDf3rKevTR9lfAcXuWogyvQ1uuAeIjcGhkjdftf+a8/uEp5SARNNw7kNnRipG0UVKfaHNZ6eztjUdCOZ0qbD4VQu0kiawPBfEytCYjytycbH+YVsLGMZIIIZW2Yag1ztOX2aJproo8Z4ajghxIPKsDx3ww9sZlUlTr6V6d8dWfM1LiDApGUMWMKp5mD+AAJJ6Amr46afTFc9dnn3hjhvwLTYh/mdTkBEwvKZj5jl9ivJiRieK4prtxmckkse/Pmeteo+IcDdeyqWkJzKpV9FVQxMu5MLqM50mMyxo0ATwHwzhkdfiEXbgGfLtaRFiSQdX1IEnSTtXUc4X8G4BcPgkLjKXVr9w7EKwKoDPRMzgciGrzziGNNy9cuERncmOi7IvsoUe1a7xH4gJRk0HxNO+RSpUf8omNI+IRyNYi4ZNPAHFopmeowYpM4oAc7aRSW3p3pq04vQA3n0NSq+YwTUBYn061zLQiSw9uKhK1Kl3k1JkoaHpEBSy08rTQaQxs09SK4RTCPrSAkNykDR7g3g3GYmClrIp+3c8ix6EZj9K74n8OjCFED52yguYhcxOyDeB33122owAErU8Go9tzH50x7oGw+tGAOeZrtQ5mNcp6BVrtcUGnxpFNEnUc0Y4XjcpgnSgsVKjxVzTlkVP0jd2SVgjVW2NQYlIlhsfmHQ9apcB4mpHwnO/yno39jRd13B/3Fa0k1qM+OmnlATGOVXNzH4ipbWKDprrG47dR3FNxtuCVGxGh6c4oUHKPI2O4/OsP2bkr2xMGjeExLIiAkERtuV30I5daF2QrMST5VUufQcvqQPeuljlJO5IJ/wCUE/8AdSaTGugq+HR/OujDlz/806zdKgzrPOhFnEEHf35irz4iELDc6Dox5VHz2afXRy9bzERqu5/tUNzC65l05xyooLIViBprqtSLaUzGh6VPg80CMdII1q/wri9ywRlMr906qabibctA1jSo7VlmdbYE5jr2HM0njXYLpmz4djhiGC2zDn7P5+wrVph1toLjBSRK5idMhguwB0ElSB1EUD8G8G+Az3m+0CqvEqFUguT0J0A9DpUnizjiG05ghUUM2saT5UBH2mIURyBY9KOPjldiu2+jNeLPFvzKrhyZCrHlCzo5HI6aDfr3j4Dh2t4Zrj+a5fhzO5Ta2nYMT9Gb7tZThGFOJxGa4fKJe4dgEUjyjoNlA5Celej8LQ3buYiFQzH8eyrH8I09S9atpJt/olLXh5txxHFwq6kEaaiDO5PuZPvQsGK9u45wO1i1hgFcbPz9+ory/jvh25hmhxI5MNjWc8qr30qowCsRUYSnZY/tXQJrUghLRtXVE71KyVCUigCSK5SR641ADqlS7Gh2qEUT4Lw9LjObjlLaJndguZtwFVRI1JPPTQ0CZXNvmKmscGvXBmVCE++3kSOuZoBHpNE347hsN/8AbWAzDa7fi689VTREPs1AOK+IMRiGzXLjN0k6D0A0X2Ao6BBpMDhLMG/fN1v/AMdnRfRrjDUfyik3ihUMYaxbs6RnAz3Y73HBP0isnPv+dbrwlwhLNs47E6KsmyhE5mBjOVO8HRRzOuy0b/QzZ+Fbj2rZW87NiL4zFCSTbtrB807E5tRykDkaw/jjEszgk6kj6BIj60a8G4p797E4hplUCgbwHaQO58szzJJ51l/FV6boA7n2YyKa8bEwEENOCinpbJqZMMOdTgyCaVXBbUch+dKgAIgp61Iy02Iq8wjdOuBOhkdTpXBSJp0UegdVorUcH4hnARz5hsevY1lqmsXCpBG41FXNYZ1OmrxSbiN9vUUFvbjTtRBeIfGAgeePMOsfaFRX0GU9dx7b0VI5bzsp2Ay6g8xB7bn9KJG8jSMil48oOaCeYgGCeeo5VWOH8qsIjWddQeQI76f5NULblW1JmZB5z1B61nhomG7Kl7TfEQAqRlcKqQNiDtmB00300pvwFAAk+TK56HMwj3gfjQ/E4h3gs7NG0kn6CnMSWgnRdP6gAPp/egoP2LguAGdRz5j1p2MBC9xsaBWnZDmUwfz/AL0Ys4kXVy7N93r6f2rKpw0mtGYLEAzoMxEVoPClpM5LEZ3MAnko3P0knoAaz9vDlTnKyB03orwTCl3VnMI+YyZgWUj4rN2ZsiDsLvIVOaxt4ja4y8FV4clETKEQZmOsEiNmzMOXM/d08u8bcQl1w6aKkO4mf3jDRSR91SP+btXoHFcf+yYa5ffLncwqEySY8i6GB9tmjfU15h4awZv3y9yWVSbtwn7bEkgGObMdR0mtt/RkaHg+DNmwoj95ch2nkDPwlPtmc9gwrWcPxVqwgViwIUsZHzMRmJJjTca0De8c5cgMZOk6FvtewgL/AEnrQi/j3YgMx2I3hFDEEtr0gECn8zX8f6DXPZ6PZbPDqSSVBI2IB1BA5zTbr2b6m1cKny5pkaCSAfwoDw/jy5ycoghVQTHlUECDyOp0NFlFu6kJBYLARgJBG0A79dJqHwr+ilyMyr+CrLM378xOhUCI1GubfXmP9q+J8F21WQ75s2gDI0p1+RYP+QeWtwDl1MgeVoyjXKoA1I3Os68zNVuKcdsWJzkEifKIn0NGYHpjcb4SO1li7AEkPCltoyaCOfzRNZi5aKkqwIIMEHcGvRsL4oS47hbcKgDkyo0BkMM5GuvKq/iHh6Ym2b9vz3FI2jMUHzKwGpYb6ydY5Ub2Jr+jzt7fSuLUrXAOc1A7zsKoRJHTfpWodUt8OuAfOzoHI11KN5fbMn586zeGUqC7ctFHVus8o5d9fsmr3EXjA2hOty5cdtdTBCKY6fu/xpAZ24dKjpztVzhXDmvOEWBuzMflRB8zN2H4kgc6ACnhPgfx7mZ5FpILnbMTqEU/eIB15CSaIeLeN/HcIkC2kKoXRfKIAUclA0HudyascXxyWLK4e1I8vmmJAO+aPtvALdNFGgNZJX1B70Aepf6f2cmBxN2N3OvZFU//ADNYjjCZrra7afSvQeEH4XCbY2NzM5/lL5fyyn2rzjHLmdpneI9AB+lWl/ET9K3xY0OvpXWunpAruSNhFMIB3NSIegnnSqPLG1doKGmxpVa4sV6jjvC9q6CUORvqPcVkuK+Gr1uSUzD7y6it3PRyTemYAqRVqVsMRSZIFQpNfrSM24JB3GldKRXVpzCqSFp3D3yjBlMEUV/bFfUDK3NeR9P7UGC1ItNdrGD6ehbC3ZH8pj25f52ruNwgIkbb1Uwt7zSfQ9xRqwuYFT0/PapqRzXYBw9zKwzCQGB6c9verF2CZSRqTBMnXeTAmn3sLIn/AD3qojFdDWbWGqZYs3Z02O/vVlBmgroaHhedT27sdjyPI0hmj4PijdcWm0cmAT8rdc3SN57VomuDIuTQ3chtgja3qMKjCJ1811528450A8NYPOGdpAeUJG4tKA19l7kFbYjncq5hseL1+7fcxbshl0grmZZvERuFtpkHZl50kkmDegXx7jy727UkhVztJ1lwAgbuERD6s3WivDMH+z2FQ6O5Dv2Yjyg/yLJ9fWg3ArRxOKfEXRIDG6w38xPkQH6f8tGOJFnVmHORPb7RHqQPZVo3FoJa8Ohwfl9BVTiGFVkLElSOnM9CKqYZLqDMBoNR1qb/ANVzumbYEE7bjr/esppp6mbNJrGBVulGtnNpnBKyJDDtvvFaO9x8jRUGblB1n9O/TvVXxRgs6DEIggfOQdTJAzEf260L4IhzK7axtrIGkCe/rXVNOu1+znpfPRZPFryZ5zB2JYZswIJJEgE9aCXn/aHCZyGEyX1VozMzSBIO+496MeIMzkOx1ECOeUbfrWeW5bQnRizAqW+UKHBByqNToTufapqcfY09R1r6SPnymFLaDMFgarqdorUeFOIvbvw5hXIEzpI1DLzI/wDHSsjbwxzQytGwIGn1OgHeimEy/EQq40yKdx8qwSDzBiont4y2sWol8TYVLeJuhVhS2YLyAbWB2mdOkVRw+Gd2CiFn8ANSSOwkxWx4lwA3UNxSWuKASJ+dADMfxaSI31G8VkcTiSiMokO+hncKOXbX/wCJ5avMeEkXEsUrMETREEDuRux68/qTzq34kXIbVo/YtKD/ADFQzf8AUWobwrBG9dS2o1d1T2YwT7Ca0XiLhNy9iHe2AV1aMy5okknKYMUgMthsKzuqopZmIVVGpJOwFb6/hkwGGCyrOT541z3liEBjW3bnlu5Mjo7gvCv2JBcc5cRcQsDof2eydC4ne42wHeOtZPjnETffNGVF8tteSqNvXrPOSedAFHEYgsSzGSTJPUmo7HzD/N6jY1LgULOFGpJ09ToKAPY+Ktk4dhVPO0hI9U1P1YfWvMnc5iepJ+tejePb2RFQbW0yj2UR+KGvNUuVp4kJkocGo3t07TlTS0UhEW1dpFxSqSjfYbiRXnRjDcVVtDWAXEkVas47rXdk0eXlT4bHHeGbOIErCt1FZDivhK9akgZ16jf6UXwfGWWINaHAeIUbRxWdS5NJ5d6Z5M1giQRrUYSvYOKcAw+JXMsK3UVhOM+F71iTlzL1FJNM1+jLsIrq0+4lIJQVvRYtLpV3BYiPKdwPL3G+X16VSsnftTx1GhHPvWmdGetMK5A0xsdR71UxGFkGfareFf4gJEB11Zev8aj8x7+lpUDj8DWfwark0zDoy6HbrVrDEMAkSSYUDck6AD3ojjMAQNBVvwbw0NfN15FqwjXGfbUCFg/e1JHdayqfns0VaXvEOKXCYRLKnzuAJG2RZM/1OWf0yUJxjGzg7eHE57sFxrMMVuuD1OuHX+hxVC7jP23G53HkBLlBsEQTkHqAFHqKOYBPj33xLgZLZAQcncEkkA9XLN7gVmaFqzZGGsC3MO3nuEcjGo/pBA9WWreGxauEQAfDOmcaZT91hyNZ7jOKLEgncy3puPqdfTL0qDAYpkaUOv2kOoYen6VPItWFS8ZtuIYHIjN82mkdT2rI4jhpRTpJ3PWtLwzFfHBa00lN7ZPmH8s6sK7dRH+ZsjdDz61zr+Jr0zLcExUP8O5olwFG7T8pPowU1RabLujSuUnQ7kct+0GjfEMKueTsNmAqPF4u3dRbdwQ6LlS8BMqNkuDoOR/3rq4bzo5+Se9KdkreZUkCQSSSAIAnWfT8Kz+PwuV8rDVTE9t49dR9aufDKHymOWhmf1HKk95gAYBI5b6DTUbGJ3POK1pN+kJ4/wDAMso5Y85BEDuCBA6CjOE4Q6ILjQCTAWdR3I9eVFBiUI/dqdVGhEHNGsAE6T761BiszDznKFHPTU7RO9Skik9Wm58IC01tQ7SzKyROoEkiPrFZn/UTw5lJurJbQFoEXATAnXRwTr1Ec5obhne0RnlQwBV1YMACdMyjl9CK0XCuMMzgXGDooObSS0qVWeu8/nQ5Y00P8E+E2sEXnAdjEBZ8p2Kk+8yOnatBxDhVlLmYAkgT5irKNSR5SsnXWJEzVrhnE0cgWbgCKAmSRAIJk9vXb6UzEIzABwQUPPb5SBqO4qMxjMT4x4h+7K3CXuO5CtsECEEzrqYYCI5kztXnuIflXpHFPCmIxAXIAAXuOCzAfOUGxMj5T9aGt/p1ekA3bK+rz+QopAYKaOeDcPnxdlf+Ih9gwJrQW/8ATwnfE2p6KGY9thR7w14WTCXGvO5copg5GVVYqQJzQSd/zpJADv8AULGSzDplT3AVj/3NWC+Ka1HjC+HbMCCHdyCD0Zo/6WSsqyiqr0kccQRS+Mx60kCyJpPfk6Cp0oYXNKuz2pUAGQ9dDVBBrgeumaZzuUW1ukc6tWMV7UKz11blaKjKuNM1/DuMOh0atRhOOq4h9a8ws34olh8X3puZozaqfDWcS8MWsQcyQrHptWW4n4Xv2PmQsv3l1+oolgONMhGtbThXiRHADwZrNy5/yWqTPIfhxT0FeucS8J4bEgukI55rsfUc6xPFvCOIsSSudPvLr9RuK0i5bwVakZy2pVgymCDING7Dh/MohvtJyb+Jeh7f4aC2DVm1agiK6pjTnrkzsKAZlEjcxUPjm+MLhUwiQHu/vLsb5Dqqn3H/AE96LcFVbjojjcyCNCcupB9Yie9Z7xXwi7ibj3Zi8pOey/lKgDyhDsQBHruDyrj/ACl8tI6/xK+06Bfg/hjOGK6ZzkB6KuV3b0HkPsa03EbyW0yoIt2xAHNuXvJ/KrPDsEcNhkTZ2QLI5KxzuR3LEj+haC8ZwruAFiF5a7xH0ArniHXh01Sn1gC7LsXAIJMztUNwuDB8vf8AtVhyyGHU+sfrUyXkYa6jpVuEyE2RJdRTnV3LgyCJBkd+XtRTDcfdhDorgay2rfUaihVzCodUMdp/SqrZl71hXGbTRsrPEbDgg5kb7reZfQNy96hHD0uary6a/WKyJxc6GprF10bNbdl7gxUf8bXhf3vpoX4XHLMKq28JJKqBprGo+h60zD8euA+fz99ifXrRfCcXw77ko3dZWe5FJu0NfLKmHcJyyknpH0q/ZxYzAkSEVnuSJARFLNI5hoC/1U/E8N+KARDryZDmHuOVZzizPat3AWPndbY6wkOwHONUBpT3WjrpYF8R4swTsS+CBmdVIQz3IGvrRLD28FfypatPbf4Qf5pWNRBGhadNoJrysuTM8+db3w9bcW0vCQFT4ciS/lKkFQCNJBXcb1vNdmDRYThzWXkq4y7OubMpMkA9RAMKeVahPEa2bOW4yuYUgAZVIPmM945D7xoXg+IhyzIGdhqoLXMpdoGcq5MACRrvOlZrjXEnstczhTcfqJZCGmQfYH1jpTqtGlgT8R+MgjlEtoVXqDmzSZJIbQbaf7Vm7vi68flyqT0CiPQxP41m3csSTrOtdIFRozQJ4pxTEKbzx0DNudNBNa7it9rNlLBM3WXPeYksVJE5QTtA1MVnvBHDlBfF3B5LHyA/+5fOqD+n5j7UTNkur3XeHYyJE6b6/h9Ke/K1glvRl8ahJBeVXUICNgdfqdzVB0jbWieJzk+Zsw2knT26VC+GAOh9j/ehJ12JtLoohQaYUirD2aYyTSwYwIek+9KnC2RSoAKk0xlrgenV2YcmkTLXKly1wil8j+hJUivUc10GhdATrdIq/gcWRsf70LU1JbPTetJZnUm/4Lx4rGtbjA8VW4sGvG8Lf2nQ9a03C8cywZp1wqlqMP8AlqH34bDivha1elkAR+o2PqOdZXEcAuW2h106jY1sOFcSzDejilXWGANRPNfF0+0U+KOVbLxnnFnBFSCNCNR60YxC2r4DYlSLluMtxZBZVM5GA+b/ADbWdIeDKDI1HSnPwoEbUcnNx8nVC4uLm4ns/wCv0zB4pjcckkLA06abL2j+1CMYCphhH4j2I0Na3iOECsYrPYm4VbSuriiVGSc/L+RTva/0BXXNuPrQvGYVDtoe2lHsRi02dB6r5T+Gn4UFx9+1PkYjsw/UVHLPXaOnhv6BzYcjYz66fjUT22iSfx/WrD59wJHUSf0qBmbn+UVxVn6R3SyqbR3BpLcK7ipHTov0qMh+hj0NRhWkoug7Nr3EV0EnSoDbncR611bZB3iljHqLlrEPaYFXIPYkVD4mxJZkRmJZEDuTv8S9Fx/oCif0UsMme4of5Zl/5EGd/fIrUJxd9rju7fM7Fz6uSSPxqGikx2CwxdwoGYkgADckmBA51s24n+y2/hL84nOZnzmc0R0BK6fxHmIG8NtrhrRdhF5x5f8AhoR8387cug13NAcRiC7TPoO1HgHrfhLiIeyzFAiqqqAsxq51M8xBP1rynjePN687t9ptuQA0UDsAAK9D8J+TheIubEsQD3S2xH4sK8tfehsDhNWuHYJ71xLaCXdgqjuevYCSewPSqqitr4dwv7NhziGH72+Cloc1tzDv2zHyjsD1oS0Aw1hHdMLaYCzYBlzs7bu5jcs34RT7GHtvKZmIG5AmetLhWKtWMssjEiXkiJNWhx/D2WZoQ5uSwfyopfX/AINPAbd/ZyRaRCwGhMQfaKHY3gZzeRHC9WA/SiQ8W2UcsLYIP3YBH1FQ8V8UW3AKZ1bpAy++tJJrwTegfFcBdBIYN1HOhF1CN96v/wDrV0PmDAH0H5GosTxFrjZnAJ7CKpaJlAPSqSlSwNHhqkR6rGacjV0qjByXFNJqaGEVCz1f2RhNNIVGr04UboYSCpEaoJp6tT0Gi9ZcUVwt2PSglo0Qw7Gt4o5uSdNTw7FkEQa13DeJ7A155hrsUYweMgiruFaONVXHWo9Sw18MBU51FZHh3FBG9GbWPB515t8Llnqcf5E1PYM4xhmEkj3rC8RiTrXqrXFcQ0a1jvEXhYmXtajcrz9q6/x+dL+NdHHz/jvfue0edYlqC4laN4+wyEgyD0NBL8zWnKzThRTfTUGPTSmDEOPtN9TUrrNVmrirTtnGEMHxIqwLeYdJ/WiicSU86zNdDVKpoblGgv4gN0P51UYcwCKHJfIq9hMWJ81LdGFcFZ/+nxV1h9hbFvlL32AaD/CiOffvQrhXD1g3rg8isAqn/wBxhqR/KNJ9QOdaLH2CbeHw58iZWxV0jo/7u2B/EUUADrcNZnjfEQxyoMqDQKNgOk8/Wpp9lz4VOK8Qa45JMySZ6nrQ9d64TTkFSUelWrmTgh6uzn8bSfkWrzaNa9A44cnCcMnN2J/6rn/8rWBRZoALeGuE/tF0BjltoM9x/uovzf1HYdyO9G+OcQzy4GUEZLaDZLajLp0AHl9zVhbAw1gWNncC5fPNQBKW/wCkGT/E3agGJxGcyJA2A6AbCrSxCZTpE96ezU3SkMYCa5mqZctIgciPQ0YLSLNSnvT8o6flTCO9LBndetdpmalSwWlplqPLTiTXVFbaZDSxrlSOs1zLQBFNTI1MauKapPBNaWhSioVepVq0yMJEaiWGehyDWr1sRWkvCKnQpberVq7QpHqdLtbzZzVAesYsrsaJYXi8bmKyYxEVKMTNU8r0y+GvDfW+IyN6IYbi4GjV5xZ4iyc6KWOLqRqawviRpN0jT+IOBWsSuZYV/vD9eteU8Z4Q9lyrr6Hka3GG49kaJ8tHryWcSmVwNRoeYrF/U9Pw2mk/PTxF7dQ/CGs6aHlOvKtd4m8K3LBLKMydR+vSsqT1qXhrLZUNumEVaumqzVFI2lsa67az+mv+H3q3wTBfHxFq0PtuqnnpPm/CaqRRnwnxsYPEC8bfxBkZCM2VgrxmZD96BHudRvUP+ytCvjbiifFdbf2iAx6KihEXtCgCOQ03LVhrhM164/BcDj1LYR/3gUMbLsEvqCAfKxkNExrmXlINYLjHhi9aZ/KxC6kZcrqOrJqY/iWV71DLRngKeg2rpFPsDzD1FIZtfHJIw2Ct9LUkfzBGH/caF+GMEBmxLr5LRAQHa5e3QdwsZz6Ac6O+PbD3MVh8PbEuLSIo5ZpYEnoABJPQGlftiEsWYa3h1KqZA+JcOrv3k6+gXrVTOsTaS1gTid5iSCZZjmcnckmYP1+poYymr9+2ykhwQecioyE+/HtWrgj7KDA1EwNXnQdQagcVLnClWleaU0+K5AqChs05GIpZaU0AdLzSrk0qALT71xa7SqzE5XHpUqoBjVylSpgPWphSpU0JlnD71efauUq0RnQ63UwpUq0RkxPtUamlSq0Jj2NRI5nelSp/oTLiuetG+CYhvvHeuUqivCa9RusJ5gQ2oI2NeYeOcGiPKKF1O1KlXIvTon9GRaq7UqVJmyOGmmlSpFCLFSGUlWXVWBIIPUEa17H4NvtjcAxxR+KyfEysQA65V0IdYae8yedKlWbKPJeJagN9otBPMgAb9++9V8GP3ieo/OlSoKPUeK6X8c/2lw9tVbmA5AYD1rzrjF1g6gEiFB003NdpVS8FQ/D4l2EMxPrU+UHkPoKVKt14YL0qONagalSqKKRGaVKlWTNBLXTSpUFHaVKlSA//2Q==",

   "Snowspeeder":
     "https://imtoys.com.br/wp-content/uploads/2021/09/AMT_Snowspeeder_13.jpg",

   "TIE bomber": tbomber,
   "AT-AT":
     "http://kaiju.wdfiles.com/local--files/wiki%3Aat-at/at-at_1980_02.jpg",
   "AT-ST":
     "https://static.wikia.nocookie.net/starwars/images/2/22/AT-ST-TCGbyAdamLane.jpg",

   "Storm IV Twin-Pod cloud car":
     "https://swrpggm.com/wp-content/uploads/2021/10/CloudCar_FE.png",

   "Sail barge":
     "https://cdn.thisiswhyimbroke.com/images/vintage-star-wars-jabba-sail-barge-640x533.jpg",
 };
  return (
    <Link to={"/tudo"}>
      <div
        onClick={() => {
          store.setAutomovelSelecionado({
            fabricante,
            nome,
            modelo,
            tipo,
            velocidade,
            preco,
            url,
          });
        }}
        className={`card ${className ? className : ""}`}
        style={{
          position: "relative",
          padding: "0",
        }}
      >
        <div className="bordered-shape">
          <div
            key={nome}
            style={{
              flexShrink: 0,
              borderRadius: "17px",
              height: "400px",
              width: "350px",
              marginTop: "15px",
              textAlign: "center",
              paddingLeft: "0",
              ...style,
            }}
          >
            <img
              style={{
                marginTop: "5px",
                borderRadius: "15px",
                marginLeft: "2px",
              }}
              src={imageList[nome]}
              width={"190px"}
              height={"90px"}
            />
            <div
              style={{ width: "290px", marginTop: "7px", marginLeft: "14px" }}
            >
              <p
                style={{
                  width: "80%",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  marginTop: "18px",
                  wordBreak: "normal",
                  color: "#534B62",
                  fontWeight: "bold",
                  margin: "auto",
                  fontSize: "15px",
                  marginBottom: "0",
                }}
              >
                {fabricante}
              </p>
              <p
                style={{
                  color: "#DDD4EF",
                  fontWeight: "bold",
                  fontSize: `${nome.length > 23 ? "22px" : "24px"}`,
                  margin: "0",
                }}
              >
                {nome}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  color: "#BFAFE0",
                  margin: "0",
                }}
              >
                {modelo}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "8px",
                }}
              >
                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "#CFBFF3",
                    margin: "auto",
                  }}
                >
                  {tipo}
                </p>
                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "#CFBFF3",
                    margin: "auto",
                  }}
                >
                  {`${velocidade}/km`}
                </p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "0px",
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "#F3BA3E",
                }}
              >
                {preco === "unknown" ? "90.000" : `${preco}`}
              </p>
            </div>
          </div>
        </div>
        <div className="colorLine" id="l1" />
        <div className="colorLine" id="l2" />
        <div className="colorLine" id="l3" />
      </div>
    </Link>
  );
};
export default ElementoAutomovel;
