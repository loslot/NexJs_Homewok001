import ButtonStateComponent from "@/components/button-state-component";
import ButtonComponent from "@/components/buttonComponent";

export default function Home() {
  return (
      <>
          <div className="grid place-content-center h-screen ">
      {/* counter buuton */}
      <ButtonStateComponent />
      {/* button 1 */}
      <ButtonComponent name="Button 1" background="red" />
      {/* button 2 */}
      <ButtonComponent name="Button 2" background="blue" />
      {/* button 3 */}
      <ButtonComponent name="Buuton 3" background="green" />
      {/* button 4 */}
      <ButtonComponent background="yellow" />
      <h1 className="text-6xl text-amber-400 font-extrabold">
        Welcome Next.Js
      </h1>
      <p>Enjoyable to work with it.</p>
    </div>
      </>
  );
}
