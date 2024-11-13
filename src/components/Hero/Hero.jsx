import SearchBar from '../SearchBar/SearchBar';
import { OuterBox, SearchBarContainer, TitleTypography } from './styles';

const Hero = () => {
    return (
        <OuterBox>
            <TitleTypography variant="h1">
                Galeria de Imagens
            </TitleTypography>
            <SearchBarContainer>
                <SearchBar />
            </SearchBarContainer>
        </OuterBox>
    );
};

export default Hero;