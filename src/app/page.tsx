import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import '@/assets/index.css'
import '@/assets/tailwindExtends.css'
import WelcomePage from "@/components/pages/welcomePage/WelcomePage";

export default function Home() {
    return (
        <MainLayout>
            <WelcomePage/>
        </MainLayout>
    )
}
