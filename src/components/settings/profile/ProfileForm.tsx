"use client";
import { useSupabase } from "@/contexts/supabaseCtx";
import { TProfile } from "@/types/supabase";
import { type PostgrestError } from "@supabase/supabase-js";
import {
	IconCheck,
	IconDeviceFloppy,
	IconExclamationCircle,
	IconEye,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState, type ChangeEvent } from "react";

export default function ProfileForm({ profile }: { profile: TProfile }) {
	const { supabase } = useSupabase();
	const [updatedProfile, setUpdatedProfile] = useState(profile);
	const [avatarUrl, setAvatarUrl] = useState(profile.avatar);
	const [changeMsgProps, setChangeMsgProps] = useState<{
		visible: boolean;
		error: PostgrestError | null;
	}>({ visible: false, error: null });
	const registrationDateString = dayjs(profile.created_at).format(
		"DD.MM.YYYY"
	);

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		e.target.reportValidity();

		if (e.target.validity.patternMismatch || e.target.validity.typeMismatch)
			e.target.classList.add("border-error");
		else e.target.classList.remove("border-error");
		setUpdatedProfile({ ...updatedProfile, [name]: value });
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const { error } = await supabase
			.from("profiles")
			.update({
				avatar: updatedProfile.avatar,
				name: updatedProfile.name,
			})
			.eq("profile_id", profile.profile_id);
		showChangeMsg(error);
	};

	function showChangeMsg(error: PostgrestError | null) {
		setChangeMsgProps({ visible: true, error });
		setTimeout(
			() => setChangeMsgProps({ visible: false, error: null }),
			3000
		);
	}

	return (
		<>
			<div className="flex gap-4 mt-8">
				<div>
					<Link
						className="avatar pt-2"
						href={avatarUrl}
						target="_blank"
					>
						<div className="w-32 h-32 rounded-full">
							<Image
								src={avatarUrl}
								width={128}
								height={128}
								alt="avatar"
							/>
						</div>
					</Link>
				</div>
				<form className="w-full" onSubmit={handleSubmit}>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							name="name"
							value={updatedProfile.name}
							onChange={handleInput}
							title="Erlaubte Zeichen: Buchstaben, Zahlen"
							type="text"
							placeholder="Anzeigename"
							className="input input-bordered w-full"
							pattern="[A-Za-z0-9]+(\s[A-Za-z0-9]+)*"
						/>
						<label className="label">
							<span className="label-text">Profilbild</span>
						</label>
						<div className="flex gap-4">
							<input
								name="avatar"
								value={updatedProfile.avatar}
								onChange={handleInput}
								type="url"
								placeholder="Profilbild-URL"
								className="input input-bordered w-full"
							/>
							<button
								type="button"
								className="btn"
								onClick={() =>
									setAvatarUrl(updatedProfile.avatar)
								}
							>
								<IconEye />
							</button>
						</div>
					</div>
					<div className="mt-8 w-full flex justify-end">
						<button
							className="btn btn-primary flex gap-2"
							type="submit"
						>
							<IconDeviceFloppy /> speichern
						</button>
					</div>
				</form>
				<ChangeMsg
					visible={changeMsgProps.visible}
					error={changeMsgProps.error}
				/>
			</div>
		</>
	);
}

function ChangeMsg({
	visible,
	error,
}: {
	visible: boolean;
	error: PostgrestError | null;
}) {
	return (
		<div className={visible ? "toast" : "hidden"}>
			<div className={`alert ${error ? "alert-error" : "alert-info"}`}>
				<div className="flex gap-4">
					{error ? <IconExclamationCircle /> : <IconCheck />}
					<span>
						{error
							? "Es ist ein Fehler aufgetreten!"
							: "Änderungen gespeichert!"}
					</span>
				</div>
			</div>
		</div>
	);
}
