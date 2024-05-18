.header-border {
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: center;
}

.logo{
    display: block;
    margin: 24px auto 22px 0;
    text-decoration: none;
}

.logo-web-font{
    color: #000000;
    width: 90px;
    height: 31px;
    top: 12px;
    left: 16px;
    gap: 0px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;   
}

.nav-menu {
    color: var(--color-heading-primary);
    font-size: 36px;
    font-weight: 700;
    line-height: 1.11;
    letter-spacing: 0.72px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 40px;
}

@media screen and (min-width: 1280px) {
    .header-border{
     width: 1280px;
     height: 56px;
     gap: 0px;
     opacity: 0px;
    }
    .logo {
        display: inline-block;
        margin-right: 76px;
        text-decoration: none;
    }

      .nav-menu {
        margin: 0;
      }
}
@media screen and (min-width: 767px) {
    .header-border{ 
     width: 768px;
     height: 56px;
     gap: 0px;
     opacity: 0px;
    }
}

@media screen and (max-width: 320px) {
    .header-border{
     width: 320px;
     height: 56px;
     gap: 0px;
     opacity: 0px;
    }

        body {
          overflow-x: scroll;
        }
      }